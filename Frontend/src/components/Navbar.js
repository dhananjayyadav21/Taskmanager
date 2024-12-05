import React, { useContext } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import TaskFilter from "./TaskFilter";
import taskContext from "../context/Task/taskContext";
import Alert from './Alert';

const Navbar = () => {

  const taskcontext = useContext(taskContext);
  const {SearchTask} = taskcontext;

  const OnSearch =(e)=>{
    if (e.key==="Enter" || (e.type==="input" && e.target.value.length===0)) {
      SearchTask(e.target.value);
    }
  }

  const location = useLocation();
  const navigate = useNavigate();
  const navigateToHome = ()=>{
     navigate('/');
  }

  return (
    <>
      {/* Nav bar */}
      <div className="container-fluid">
        <div className="my-2">
          <div className="row">
            <div className="col-12">
              <div className="bg-color-gray p-2 border rounded-4">

              {/*================================================== Search Box ========================================================*/}
              <div className="d-flex justify-content-between">
                {location.pathname === '/' ?(<>
                  <div className="searchbox-component-formobile">
                    <input type="search" className="form-control rounded-4 py-2 px-4 searchbox" id="search" aria-describedby="emailHelp" placeholder="Search Project" onInput={event=> OnSearch(event)} onKeyDown={event=> OnSearch(event)}/>
                  </div></>):(<><div onClick={navigateToHome}><h5 className="mt-1 px-2 cursor-pointer">TaskManager</h5></div> </> )}
                
                   <div>
                    <Alert/>
                   </div>

                  
                 {/*=========================== handle when user login show logout btn as wll as login btn ============================*/}
                  <div className="d-flex align-items-center align-self-center gap-2">

                    {location.pathname === "/" ? (<div className="mx-md-2 progresBar-small-text-forMobile"><TaskFilter/></div>) : ""}
                    
                    {!localStorage.getItem("token") ? 
                    (<><Link className="btn btn-warning mx-1 rounded-4" to="/login"> login </Link>
                        <Link className="btn btn-warning mx-1 rounded-4" to="/Register"> Register</Link></>):(<>
                      <Link to="/user" className="btn btn-danger rounded-5">
                        <i className="fa-solid fa-user-shield"></i>
                      </Link></>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
