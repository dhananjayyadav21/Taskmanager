import { useState } from "react";
import TaskContext from "./taskContext";
import HttpService from "../../services/httpservice";

const TaskState = (props) => {
    
  // Get All task using api request =============================================================================
  const getAllTask = async () => {
    const json = await HttpService.GET( "http://localhost:5000/api/task/getAllTask" );
    console.log(json);
    setTask(json);
  };

  //define state for task
  const [alltask, setTask] = useState([]);

  return (
    <TaskContext.Provider value={{ alltask, getAllTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;