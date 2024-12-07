import React from "react";
import Sidebar from "../components/Sidebar";
import Task from "../components/Task";
import ExpiredDeadline from "./ExpiredDeadline";
import WebSocketService from "../services/WebSocketService";
import { useState, useEffect, useContext,useRef } from "react";
import taskContext from "../context/Task/taskContext";

const Home = () => {

  const contextTask = useContext(taskContext);
  const { setTask, alltask } = contextTask;
  const allTaskRef = useRef(alltask);
  
  useEffect(() => {
    // Update the ref whenever alltask changes
    allTaskRef.current = alltask;
  }, [alltask]);
  
  useEffect(() => {
    // Connect to the WebSocket server when the component mounts
    WebSocketService.connect();
  
    // Add listener for incoming messages
    WebSocketService.addListener((data) => {
      let wsdata = JSON.parse(data);
      if (wsdata.event == "taskExpired" && allTaskRef.current.length !== 0) {
        const filteredArray = allTaskRef.current.filter(
          (item) => item._id !== wsdata.taskId
        );
        setTask(filteredArray);
      }
    });
  
    // Cleanup when the component unmounts
    return () => {
      WebSocketService.disconnect();
    };
  }, []);


  return (
    <>
      <div className="container-fluid">
        
        {/*Task content container */}
        <div>
          <div className="row gx-2">
            {/* sidebar container */}
            <div className="col-md-2">
              <div className="sidebar-height">
                <Sidebar />
              </div>
            </div>

            {/* Task container */}
            <div className="col-md-10 mt-4 mt-md-0">
              <div>
                {/* <ExpiredDeadline/> */}
                <Task />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
