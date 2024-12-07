const Task = require("./models/Task");
const ConnectMongo = require("./Db");
const express = require("express");
var cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const WebSocket = require("ws");
const TaskQueue = require("./Helpers/TaskQueue");
const cron = require("node-cron");
ConnectMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/task", require("./routes/tasks"));

//#region WebSocket
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Clients for WebSocket
let clients = [];

// Broadcast to all clients
const broadcast = (message) => {
    // console.log("clients.length",clients.length)
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
};

wss.on("connection", (ws) => {
  clients.push(ws);

  ws.on("close", () => {
    clients = clients.filter((client) => client !== ws);
  });
});


// Create a queue
const taskQueue = new TaskQueue("taskQueue");
taskQueue.process(async(job)=>{
    // console.log(job)
    broadcast(JSON.stringify(job));
})

// Schedule periodic task checking
cron.schedule("* * * * *", async () => {
    console.log("Dcheduler",new Date().toLocaleString())
  try {
    const now = new Date();
    // Find tasks with deadlines passed and status still active
    const expiredTasks = await Task.find({
      deadline: { $lte: now }
    });

    for (const task of expiredTasks) {
    //   task.status = "expired";
    //   await task.save();
      await taskQueue.add({ event: "taskExpired", taskId: task._id });
    }
  } catch (error) {
    console.error("Cron Job: Error checking and queuing expired tasks:", error);
  }
});

// Start server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export for use in routes
module.exports = { taskQueue, broadcast };

//#endregion WebSocket
