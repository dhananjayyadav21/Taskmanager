// taskQueue.js

const EventEmitter = require('events');
const Task = require("../models/Task");

class TaskQueue extends EventEmitter {
  constructor(queuename) {
    super();
    this.queuename = queuename;
    this.queue = [];
    this.isProcessing = false; // Track if the queue is processing
  }

  // Add task to the queue and emit the 'taskAdded' event
  async add(task) {
    this.queue.push(task);
    this.emit(this.queuename+"taskAdded", task); // Trigger task processing when a task is added
  }

  // Sleep function to pause processing
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async count(){
    return this.queue.length;
  }


  // Start processing tasks automatically when a task is added
  async process(callback){
    this.on(this.queuename+"taskAdded", async (task) => {
      if (!this.isProcessing) {
        this.isProcessing = true; // Start processing
        console.log("Queue is processing now...");
      }

      await callback(task);

      if (await this.count() === 0) {
        console.log("Queue is empty, going to sleep...");
        await this.sleep(10000); // Sleep for 10 seconds if no tasks are left
        this.isProcessing = false; // Stop processing if the queue is empty
        console.log("Queue is now asleep...");
      } else {
        // console.log("Tasks remain in the queue, continue processing...");
      }
    });
  }
}

// Export the TaskQueue class for use in other files
module.exports = TaskQueue;
