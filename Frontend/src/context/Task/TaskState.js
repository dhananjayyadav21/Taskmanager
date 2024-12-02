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

  //Add note() using this function =================================================================================
  const addTask = async (newtask) => {
    const json = await HttpService.POST(
      "http://localhost:5000/api/task/createtask",
      newtask
    );
    setTask(alltask.concat(json));
  };

  //define state for task
  const [alltask, setTask] = useState([]);

  return (
    <TaskContext.Provider value={{ alltask, getAllTask, addTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
