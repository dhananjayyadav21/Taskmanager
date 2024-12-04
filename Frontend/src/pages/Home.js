import React from "react";
import Sidebar from "../components/Sidebar";
import Task from "../components/Task";
import Alert from "../components/Alert";

const Home = () => {
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
                <Alert/> 
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
