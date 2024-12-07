import { useContext } from "react";
import taskContext from "../context/Task/taskContext";
import HttpService from "./httpservice";
import * as GlobalUrls from "../GlobalURL";
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(item) {
    console.log("inseted", this.backIndex, item);
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item + " inserted";
  }

  dequeue() {
    const item = this.items[this.frontIndex];
    if (!!item) {
      delete this.items[this.frontIndex];
      this.frontIndex++;
    }
    return item;
  }

  peek() {
    return this.items[this.frontIndex];
  }
  get printQueue() {
    return this.items;
  }
}

//============================================
const queue = new Queue();
const SedulerService = () => {
  const context = useContext(taskContext);
  const { alltask, updateTask, setTask } = context;

  const CheckExpiredTasksTasks = () => {
    const expriredtaskfornow = alltask.find(
      (task) => task.deadline <= new Date().toISOString()
    );
    if (!!expriredtaskfornow) {
      if (expriredtaskfornow.status !== "Expired") {
        queue.enqueue(expriredtaskfornow);
        const newTaskList = alltask.filter(
          (t) => t._id != expriredtaskfornow._id
        );
        setTask(newTaskList);
      }
    } else {
      setTimeout(() => {
        CheckExpiredTasksTasks();
      }, 10000);
    }
  };

  const RemoveTasks = async () => {
    const tasktoremove = queue.dequeue();
    console.log("tasktoremove", queue, queue.dequeue());
    if (tasktoremove != null) {
      console.log(tasktoremove, queue.length);
      await HttpService.PUT(`${GlobalUrls.UPDATTASK_URL}/${tasktoremove._id}`, {
        status: "Expired",
      });
      RemoveTasks();
    } else {
      setTimeout(() => {
        RemoveTasks();
      }, 1000);
    }
  };

  setTimeout(() => {
    CheckExpiredTasksTasks();
  }, 2000);

  RemoveTasks();
};

export default SedulerService;
