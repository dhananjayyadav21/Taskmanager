import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskSytate = (props) => {

  let initial = [
    {
      title: "Test334",
    },
    {
      title: "fdklasjfkljklasfdj",
    },
  ]

  // Get All task using api request =================================================================================
  const getAllTask = async () => {
    //API CALL
    try {
      const responce = await fetch("http://localhost:5000/api/task/getAllTask", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await responce.json();
      setTask(json);
      console.log("task", task);
      //if accured error
    } catch (err) {
      console.log(err);
    }
  };

  const [task, setTask] = useState(initial);
  // console.log("context",TaskContext)

  return <TaskContext.Provider value={task}
  >
    {props.children}
    </TaskContext.Provider>;
};

export default TaskSytate;
