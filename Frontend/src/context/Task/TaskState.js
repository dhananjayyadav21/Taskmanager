import { useState } from "react";
import TaskContext from "./taskContext";

const TaskState = (props) => {
  let t1 = [
    {
      title: "Test334",
    },
    {
      title: "fdklasjfkljklasfdj",
    }
  ];

  const [task, setTask] = useState(t1);
  console.log(props.children)
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
