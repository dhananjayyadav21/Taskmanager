import { useState } from "react";
import TaskContext from "./taskContext";
import HttpService from "../../services/httpservice";

const TaskState = (props) => {
  // Get All task using api request =============================================================================
  const getAllTask = async () => {
    const json = await HttpService.GET(
      "http://localhost:5000/api/task/getAllTask"
    );
    setTask(json);
  };

  //Add TASK() using this function =================================================================================
  const addTask = async (newtask) => {
    const json = await HttpService.POST(
      "http://localhost:5000/api/task/createtask",
      newtask
    );
    setTask(alltask.concat(json));
  };

  //UPDATE TASK() using this function =================================================================================
  // const updateTask = async (id,edittask) => {
  //   const json = await HttpService.PUT(
  //     `http://localhost:5000/api/task/update/${id}`,
  //     edittask
  //   );
  //   const newTask = JSON.parse(JSON.stringify(alltask));

  //   for (let index = 0; index < newTask.length; index++) {
  //     const element = newTask[index];
  //      if(element._id === edittask.id){
  //       element.priority = edittask.priority;
  //       element.title = edittask.title;
  //       element.description = edittask.description;
  //       element.status = edittask.status;
  //      }
  //   }

  //   console.log("newTask odf updated",newTask);
  //   setTask(newTask);
  // };


  const updateTask = async (id,priority, title, discription, status) => {
    //API CALL
    try {
      const responce = await fetch(`http://localhost:5000/api/task/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "AuthToken": localStorage.getItem("token"),
        },
        body: JSON.stringify({priority, title, discription, status }),
      });
      //Update note on db
      const json = await responce.json();
      console.log(json);

      let newTask = JSON.parse(JSON.stringify(alltask));

      for (let index = 0; index < newTask.length; index++) {
        const element = newTask[index];
        if (element._id === id) {
          element.priority = priority;
          element.title = title;
          element.discription = discription;
          element.status = status;
        }
      }

      setTask(newTask);
      alert("task Updated SuccesFully", "warning");
      //if accured error
    } catch (err) {
      console.log(err);
    }
  };


  // const deleteTask = async (id)=>{
  //   const json = await HttpService.DELETE(`http://localhost:5000/api/task/delete/${id}`);

    
  // }

  //define state for task
  const [alltask, setTask] = useState([]);

  return (
    <TaskContext.Provider value={{ alltask, getAllTask, addTask , updateTask}}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
