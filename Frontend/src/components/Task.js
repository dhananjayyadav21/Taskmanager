import React, { useContext, useEffect } from "react";
import TaskIteamsCard from "./TaskIteamsCard";
import taskContext from "../context/Task/taskContext";

const Task = () => {

  // get context function using context api
  const context = useContext(taskContext);
  const { alltask, getAllTask } = context;

  // use effect which is call befor all and call getAllTask function
  useEffect(() => {
    getAllTask();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {/* Main container for Task */}
      <div className="container">
        <div className="row gap-md-0 gap-3">
          {/* Inside the main container to do container */}
          <div className="col-md-4">
            <div
              className="bg-color-gray p-2 rounded-4"
              style={{ height: "82vh" }}
            >
              <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                <span className="btn btn-primary rounded-circle p-1"></span>
                <span>To Do</span>
                <span className="btn btn-sm btn-primary rounded-circle">{alltask.filter((task)=>{return task.status === "To Do"}).length}</span>
              </div>
              <hr />

              <div
                className="container"
                style={{ overflow: "auto", height: "87%" }}
              >
                <div className="row gap-2">
                  {/* each Task card */}
                  {alltask.filter(task=>task.status==="To Do").map((task)=>{
                     return <TaskIteamsCard  task={task}/>
                  })}
                 
                </div>
              </div>
            </div>
          </div>

          {/* Inside the main container progress container */}
          <div className="col-md-4">
            <div
              className="bg-color-gray p-2 rounded-4"
              style={{ height: "82vh" }}
            >
              <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                <span className="btn btn-warning rounded-circle p-1"></span>
                <span>On Progress</span>
                <span className="btn btn-sm btn-warning rounded-circle">{alltask.filter((task)=>{return task.status === "On Progress"}).length}</span>
              </div>
              <hr />

              <div
                className="container"
                style={{ overflow: "auto", height: "87%" }}
              >
                <div className="row gap-2">
                  {/* each Task card */}
                  {alltask.filter(task=>task.status==="On Progress").map((task)=>{
                     return <TaskIteamsCard  task={task}/>
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Inside the main container completed container */}
          <div className="col-md-4">
            <div
              className="bg-color-gray p-2 rounded-4"
              style={{ height: "82vh" }}
            >
              <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                <span className="btn btn-success rounded-circle p-1"></span>
                <span>Done</span>
                <span className="btn btn-sm btn-success rounded-circle ">{alltask.filter((task)=>{return task.status === "Done"}).length}</span>
              </div>
              <hr />

              <div
                className=" container"
                style={{ overflow: "auto", height: "87%" }}
              >
                <div className="row gap-2">
                  {/* each Task card */}
                  {alltask.filter(task=>task.status==="Done").map((task)=>{
                     return <TaskIteamsCard  task={task}/>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
