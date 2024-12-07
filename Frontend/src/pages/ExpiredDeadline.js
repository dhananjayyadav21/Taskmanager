import React, { useContext, useEffect } from "react";
import taskContext from "../context/Task/taskContext";

const ExpiredDeadline = () => {

    const context = useContext(taskContext);
    const {alltask,getAllTask, updateTask} = context;

    useEffect(()=>{
        getAllTask();
       // eslint-disable-next-line
    },[])
  
   const notExpiredTask = alltask.filter((task)=> task.status !== "Expired");
  
   // eslint-disable-next-line
   notExpiredTask.map((task,i)=>{if(task.deadline <= new Date().toISOString()){
    updateTask({
      id:task._id,
      status:"Expired"
    });
   }})
  
  return (
    <>
    </>
  )
}

export default ExpiredDeadline
