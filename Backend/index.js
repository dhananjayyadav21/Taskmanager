const ConnectMongo = require("./Db");
const express = require("express");
var cors = require('cors')

ConnectMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/task", require("./routes/tasks"));



app.listen(port , ()=>{
    console.log(`app listening at ${port}`);
})


