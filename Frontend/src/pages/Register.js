import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertContext from "../context/Alert/AlertContext";
import * as GlobalUrls from "../GlobalURL"

const Register = () => {
  // using this user navigate login page when user register successfully
  const navigate = useNavigate();
  const context = useContext(AlertContext);
  const {showAlert} = context;

  //define state initialy credentials
  const [Credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  //handle when form sumbit what data post in db
  const handleFormSumbit = async (e) => {
    e.preventDefault();

    try {
      // data send in db using fetch api
      const response = await fetch(
        `${GlobalUrls.REGISTER_URL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: Credentials.name,
            email: Credentials.email,
            password: Credentials.password,
          }),
        }
      );

      const json = await response.json();

      //if success fully register user authtoken store in localstorage and navigate login page
      if (json.success) {
        localStorage.setItem("token", json.AuthToken);
        navigate("/login");
        showAlert("Register successfully", "success");
      } else {
        showAlert("plese try with right credentials", "success");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  //handle event when user enter data on form
  const handlOnchange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">

        <div className=" col-md-4 mt-md-5">
            <div className="row"> 
                <div className="text-center">
                  <img className="TaskManagerlogo-area" src="/assets/img/TM.webp" alt="profile banner" />
                </div>     
            </div>
          </div>

          <div className="col-md-7 mt-md-3">
            <div className="card shadow rounded-4">
              <div className="card-body p-md-5 p-4">
                <h3 className="text-center mb-4">
                  Register For TaskManagement
                </h3>

                {/* register form */}
                <form onSubmit={handleFormSumbit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handlOnchange}
                      value={Credentials.name}
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handlOnchange}
                      value={Credentials.email}
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handlOnchange}
                      value={Credentials.password}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>

                {/* if user alrady have acount */}
                <div className="text-center mt-3">
                  <p>
                    Alrady have an account?
                    <Link to="/login" className="text-primary">
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
