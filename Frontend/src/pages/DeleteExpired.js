import React, { useContext, useEffect } from "react";
import taskContext from "../context/Task/taskContext";

const DeleteExpired = () => {
  const context = useContext(taskContext);
  const { alltask, getAllTask, deleteTask } = context;

  useEffect(() => {
    getAllTask();
    // eslint-disable-next-line
  }, []);

      // eslint-disable-next-line
  const ExpiredTask = alltask.filter((task) => task.status === "Expired");
  ExpiredTask.map((task) => {
    deleteTask(task._id);
  });

  return <></>;
};

export default DeleteExpired;
