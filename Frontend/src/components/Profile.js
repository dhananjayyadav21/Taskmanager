import React, { useContext, useEffect, useRef } from "react";
import AuthContext from "../context/Auth/AuthContext";
import AlertContext from "../context/Alert/AlertContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const context = useContext(AuthContext);
  const { user, getUser } = context;

  const Alertcontext = useContext(AlertContext);
  const {showAlert} = Alertcontext;


  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getUser();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);


  const ref = useRef(null);
  const refClose = useRef(null);

  const handleLogout = ()=>{
    ref.current.click();
  }

  const handleYesLogOut = () => {
    localStorage.removeItem("token");
    refClose.current.click();
    navigate("/login");
    showAlert("You are log out", "warning");
  };

  

  return (
    <>
        {/* Modal for coinfirmation for log out ===============================================================*/}
        <div  className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" >
          <div className="modal-dialog modal-dialog-centered">
            <div className="deleteacount modal-content bg-color-gray">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel"> Log Out </h5>
                <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                ></button>
              </div>
              <div className="modal-body"> You will lose access to your account </div>
              <div className="modal-footer">
                <button  ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button onClick={handleYesLogOut} type="button" className="btn btn-danger">log Out </button>
              </div>
            </div>
          </div>
        </div>
        <a ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal"  href="#exampleModalToggle" role="button"> Open modal
        </a>


      {/* Profile container ======================================================================================== */}
      <div className="container mt-5">
        <div className="profile-area row g-4 justify-content-center align-items-start  align-self-start ">

          <div className="col-md-7">
            <div className="card shadow rounded-4">
              <div className="card-header text-center bg-info p-3 text-white rounded-top-4 ">
                <h5 className="mb-0">User Profile</h5>
              </div>
              <div className="card-body text-center">
                <img src="/assets/img/avtar.png" alt="User Avatar" className="rounded-circle mb-3" width="150" height="150" />
                <h5 className="card-title">{user.name}</h5>
                <p className="text-muted">{user.email}</p>
                <div className="mb-3">
                  <p> <strong>Phone:</strong> +1 123 456 7890</p>
                  <p><strong>User Id:</strong>{user._id}</p>
                </div>
                <div>
                  <div onClick={handleLogout} className="btn btn-danger btn-sm">
                    Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center text-muted py-3"> Member since {user.Date}</div>
            </div>
          </div>

          <div className=" col-md-5 mt-5">
            <div className="row"> 
                <div className="text-center">
                  <img className="TaskManagerlogo-area" src="/assets/img/TM.webp" alt="profile banner" />
                </div>     
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Profile;
