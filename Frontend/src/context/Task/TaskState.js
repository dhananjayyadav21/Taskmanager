import { useState } from "react";
import TaskContext from "./taskContext";
import HttpService from "../../services/httpservice";
import * as GlobalUrls from "../../GlobalURL"

const TaskState = (props) => {
  //================================= Get All task using api request ============================================
  const getAllTask = async () => {
    try {
      const json = await HttpService.GET(
        `${GlobalUrls.GETALLTASK_URL}`
      );
      setTask(json);
    } catch (error) {
      console.log("Some error for fetching tasks",error);
    }
  };

  //================================= Get All task using api request ============================================
  const getTask = async () => {
    try {
      const json = await HttpService.GET(
        `${GlobalUrls.GETtASK_URL}`
      );
      console.log("===========",json);
      setTask(json);
    } catch (error) {
      console.log("Some error for fetching all tasks",error);
    }
  };

  //======================================= Add TASK() api call function =======================================
  const addTask = async (newtask) => {
    try {
      const json = await HttpService.POST(
        `${GlobalUrls.ADDTASK_URL}`,
        newtask
      );
      setTask(alltask.concat(json));
    } catch (error) {
      console.log("Do not add task due to some error",error);
    }
  };


  // ============================== UPDATE TASK() using this function =========================================
  const updateTask = async (edittask) => {
    try {
          // eslint-disable-next-line
      const json = await HttpService.PUT(
        `${GlobalUrls.UPDATTASK_URL}/${edittask.id}`,
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
      return true;
    } catch (error) {
      console.log("Does not update task due to some error",error);
      return false;
    }
  };


  //======================================== Delete task api call ===========================================
  const deleteTask = async (id) => {
    try {
          // eslint-disable-next-line
      const json = await HttpService.DELETE(
        `${GlobalUrls.DELETTASK_URL}/${id}`
      );
      const newTask = alltask.filter((task) => task._id !== id);
      setTask(newTask);
      return true;
    } catch (error) {
      console.log("Does not delete task due to some error",error);
      return false; 
    }
  };

  //======================================== SearchTask api call ===========================================
  const SearchTask = async (input) => {
    try {
      const json = await HttpService.GET(
        `${GlobalUrls.SEARCHTASK_URL}?input=${input}`
      );
      setTask(json);
    } catch (error) {
      console.log("Some error in serching task",error);
    }
  };

  //define state for task =================
  const [alltask, setTask] = useState([]);

  return (
    <TaskContext.Provider
      value={{ alltask, getAllTask, addTask, getTask, updateTask, deleteTask,SearchTask}}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
