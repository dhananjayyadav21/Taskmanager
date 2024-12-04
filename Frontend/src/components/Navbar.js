import React from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import TaskFilter from "./TaskFilter";

const Navbar = () => {

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
                  <div>
                    <input type="email" className="form-control rounded-4 py-2 px-4" id="search" aria-describedby="emailHelp" placeholder="search Project" style={{ width: "250px" }}/>
                  </div></>):(<><div onClick={navigateToHome}><h5 className="mt-1 px-2 cursor-pointer">TaskManager</h5></div> </> )}
                

                
                 {/*=========================== handle when user login show logout btn as wll as login btn ============================*/}
                  <div className="d-flex gap-2">
                    <TaskFilter/>
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
