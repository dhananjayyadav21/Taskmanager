import { useState } from "react";
import TaskContext from "./taskContext";
import HttpService from "../../services/httpservice";

const TaskState = (props) => {
  //================================= Get All task using api request ============================================
  const getAllTask = async () => {
    const json = await HttpService.GET(
      "http://localhost:5000/api/task/getAllTask"
    );
    setTask(json);
  };

  //======================================= Add TASK() api call function =======================================
  const addTask = async (newtask) => {
    const json = await HttpService.POST(
      "http://localhost:5000/api/task/createtask",
      newtask
    );
    setTask(alltask.concat(json));
  };

  // ============================== UPDATE TASK() using this function =========================================
  const updateTask = async (edittask) => {
    // eslint-disable-next-line
    const json = await HttpService.PUT(
      `http://localhost:5000/api/task/update/${edittask.id}`,
      edittask
    );
    const newTask = JSON.parse(JSON.stringify(alltask));

    for (let index = 0; index < newTask.length; index++) {
      const element = newTask[index];
      if (element._id === edittask.id) {
        element.priority = edittask.priority;
        element.title = edittask.title;
        element.description = edittask.description;
        element.status = edittask.status;
      }
    }
    setTask(newTask);
  };

  //======================================== Delete task api call ===========================================
  const deleteTask = async (id) => {
     // eslint-disable-next-line
    const json = await HttpService.DELETE(
      `http://localhost:5000/api/task/delete/${id}`
    );
    const newTask = alltask.filter((task) => task._id !== id);
    setTask(newTask);
  };

  //define state for task ====================================================================================
  const [alltask, setTask] = useState([]);

  return (
    <TaskContext.Provider value={{ alltask, getAllTask, addTask, updateTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
