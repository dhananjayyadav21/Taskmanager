import React from "react";
import Sidebar from "../components/Sidebar";
import Task from "../components/Task";
import ExpiredDeadline from "./ExpiredDeadline";
import WebSocketService from "../services/WebSocketService";
import { useState, useEffect, useContext } from "react";
import taskContext from "../context/Task/taskContext";

const Home = () => {

  const contextTask = useContext(taskContext);
  const { setTask, alltask } = contextTask;
  useEffect(() => {
    // Connect to the WebSocket server when the component mounts
    WebSocketService.connect();
    // Add listener for incoming messages
    WebSocketService.addListener((data) => {
      let wsdata = JSON.parse(data);
      if (wsdata.event=="taskExpired") {
        const filteredArray = alltask.filter((item) => item.id !== wsdata.taskId);
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
