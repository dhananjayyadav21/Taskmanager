import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Nav bar */}
      <div className="container-fluid">
        <div className="my-3">
          <div className="row">
            <div className="col-12">
              <div className="bg-color-gray p-3 border rounded-4">
                {/* Search Box */}
                <div className="d-md-flex justify-content-between">
                  <div>
                    <input
                      type="email"
                      className="form-control rounded-4 py-2 px-4"
                      id="search"
                      aria-describedby="emailHelp"
                      placeholder="search Project"
                      style={{ width: "250px" }}
                    />
                  </div>

                 

                 {/* handle when user login show logout btn as wll as login btn */}
                  <div className="d-flex gap-2">
                  {!localStorage.getItem("token") ? 
                  (<><Link className="btn btn-warning mx-1 rounded-4" to="/login"> login </Link>
                      <Link className="btn btn-warning mx-1 rounded-4" to="/Register"> Sign</Link>
                   </>) : 
                  (<>
                  
                    <div class="dropdown">
                      <button class="btn btn-danger rounded-5 py-2 px-2  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa-solid fa-user-shield"></i>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                          <Link to="/user" >
                            <i className="fa-solid fa-user-shield m-2"></i>
                           </Link> <span>view profile</span>
                        </li>
                        <li> 
                          <Link ><i class="fa-solid fa-right-from-bracket m-2"></i></Link><span>Logout</span>
                        </li>
                      </ul>
                    </div>

                  
                     
                    </>
                  )}
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
