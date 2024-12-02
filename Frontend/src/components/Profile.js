import React, { useContext, useEffect } from "react";
import AuthContext from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const context = useContext(AuthContext);
  const { user, getUser } = context;

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow rounded-4">
              <div className="card-header text-center bg-info p-3 text-white rounded-top-4 ">
                <h5 className="mb-0">User Profile</h5>
              </div>
              <div className="card-body text-center">
                <img src="https://via.placeholder.com/150" alt="User Avatar" className="rounded-circle mb-3" width="150" height="150" />
                <h5 className="card-title">{user.name}</h5>
                <p className="text-muted">{user.email}</p>
                <div className="mb-3">
                  <p> <strong>Phone:</strong> +1 123 456 7890</p>
                  <p><strong>User Id:</strong>{user._id}</p>
                </div>

                <div>
                  <a href="/" onClick={handleLogout} className="btn btn-danger btn-sm">
                    Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </a>
                </div>

              </div>
              <div className="card-footer text-center text-muted py-3"> Member since {user.Date}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
