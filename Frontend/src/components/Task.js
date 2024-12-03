import React, { useContext, useEffect, useState } from "react";
import TaskIteamsCard from "./TaskIteamsCard";
import taskContext from "../context/Task/taskContext";
import { useNavigate } from "react-router-dom";

const Task = () => {
  // get context function using context api
  const context = useContext(taskContext);
  const { alltask, getAllTask } = context;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // use effect which is call befor all and call getAllTask function
  useEffect(() => {
    if (token) {
      getAllTask();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);



  // functions for mobile device show task at a time one 
  const showToDo = ()=>{
    setTodo("");
    setProgress("none");
    setDone("none");
  }

  const showProgress = ()=>{
    setProgress("");
    setTodo("none");
    setDone("none");
  }
  
  const ShowDone = ()=>{
    setDone("");
    setTodo("none");
    setProgress("none");
  }

  const [ todo, setTodo] = useState("");
  const [ progress, setProgress] = useState("none");
  const [ done, setDone] = useState("none");

  return (
    <>
      {/* Main container for Task */}
      <div className="container">

         {/*============================================= for mobile view ==============================================*/}
        <div className="display-none-IncomputerScreen">
          <div className="container mb-4">
             <div className="row">
              <div className="col-3 bg-color-gray rounded-2 p-2" onClick={showToDo}>
                <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                  <span className="btn btn-primary rounded-circle p-1"></span>
                  <span>To Do</span>
                </div>
              </div>

              <div className="col-1"></div>

              <div className="col-4 bg-color-gray rounded-2 p-2" onClick={showProgress}>
                <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                  <span className="btn btn-warning rounded-circle p-1"></span>
                  <span>Progress</span>
                </div>
              </div>

              <div className="col-1"></div>   

              <div className="col-3 bg-color-gray rounded-2 p-2" onClick={ShowDone}>
                <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                  <span className="btn btn-success rounded-circle p-1"></span>
                  <span>Done</span>
                </div>
              </div>   
             </div>
          </div> 

          <div className="row gap-md-0 gap-3">
              {/* Inside the main container to do container */}
              <div className={`d-${todo}`}>
                <div className="bg-color-gray p-2 rounded-4 height-task-container" >
                  <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                    <span className="btn btn-primary rounded-circle p-1"></span>
                    <span>To Do</span>
                    <span className="btn btn-sm btn-primary rounded-circle">
                      {alltask.filter((task) => {
                          return task.status === "To Do";
                        }).length}
                    </span>
                  </div>
                  <hr />

                  <div className="container scrollable task-container-content-height" >
                    <div className="row gap-2">
                      {/* each Task card */}
                      {alltask.filter((task) => task.status === "To Do").map((task,i) => {
                          return <TaskIteamsCard key={i} task={task} />;
                        })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Inside the main container progress container */}
              <div className={`d-${progress}`}>
                <div className="bg-color-gray p-2 rounded-4 height-task-container" >
                  <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                    <span className="btn btn-warning rounded-circle p-1"></span>
                    <span>On Progress</span>
                    <span className="btn btn-sm btn-warning rounded-circle">
                      { alltask.filter((task) => {
                          return task.status === "On Progress";
                        }).length}
                    </span>
                  </div>
                  <hr />

                  <div className="container scrollable task-container-content-height">
                    <div className="row gap-2">
                      {/* each Task card */}
                      {alltask.filter((task) => task.status === "On Progress").map((task,i) => {
                          return <TaskIteamsCard key={i} task={task} />;
                        })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Inside the main container completed container */}
              <div className={`d-${done}`}>
                <div className="bg-color-gray p-2 rounded-4 height-task-container"  >
                  <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                    <span className="btn btn-success rounded-circle p-1"></span>
                    <span>Done</span>
                    <span className="btn btn-sm btn-success rounded-circle ">
                      {alltask.filter((task) => {
                          return task.status === "Done";
                        }).length }
                    </span>
                  </div>
                  <hr />

                  <div className=" container scrollable task-container-content-height"  >
                    <div className="row gap-2">
                      {/* each Task card */}
                      {alltask.filter((task) => task.status === "Done").map((task,i) => {
                          return <TaskIteamsCard key={i} task={task} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>


        {/*============================================= for computer view ==============================================*/}
        <div className="row gap-md-0 gap-3 display-none-InMobileScreen">
          {/* Inside the main container to do container*/}
          <div className="col-md-4">
            <div className="bg-color-gray p-2 rounded-4 height-task-container" >
              <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                <span className="btn btn-primary rounded-circle p-1"></span>
                <span>To Do</span>
                <span className="btn btn-sm btn-primary rounded-circle">
                  {alltask.filter((task) => {
                      return task.status === "To Do";
                    }).length}
                </span>
              </div>
              <hr />

              <div className="container scrollable task-container-content-height" >
                <div className="row gap-2">
                  {/* each Task card */}
                  {alltask.filter((task) => task.status === "To Do").map((task,i) => {
                      return <TaskIteamsCard key={i} task={task} />;
                    })}
                </div>
              </div>
            </div>
          </div>

          {/* Inside the main container progress container */}
          <div className="col-md-4">
            <div className="bg-color-gray p-2 rounded-4 height-task-container" >
              <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                <span className="btn btn-warning rounded-circle p-1"></span>
                <span>On Progress</span>
                <span className="btn btn-sm btn-warning rounded-circle">
                  { alltask.filter((task) => {
                      return task.status === "On Progress";
                    }).length}
                </span>
              </div>
              <hr />

              <div className="container scrollable task-container-content-height">
                <div className="row gap-2">
                  {/* each Task card */}
                  {alltask.filter((task) => task.status === "On Progress").map((task,i) => {
                      return <TaskIteamsCard key={i} task={task} />;
                    })}
                </div>
              </div>
            </div>
          </div>

          {/* Inside the main container completed container */}
          <div className="col-md-4">
            <div className="bg-color-gray p-2 rounded-4 height-task-container"  >
              <div className="d-flex justify-content-center align-self-center align-items-center gap-2">
                <span className="btn btn-success rounded-circle p-1"></span>
                <span>Done</span>
                <span className="btn btn-sm btn-success rounded-circle ">
                  {alltask.filter((task) => {
                      return task.status === "Done";
                    }).length }
                </span>
              </div>
              <hr />

              <div className=" container scrollable task-container-content-height"  >
                <div className="row gap-2">
                  {/* each Task card */}
                  {alltask.filter((task) => task.status === "Done").map((task,i) => {
                      return <TaskIteamsCard key={i} task={task} />;
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
