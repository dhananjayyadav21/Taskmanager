import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertContext from "../context/Alert/AlertContext";
import Alert from '../components/Alert';
import * as GlobalUrls from "../GlobalURL"

const Login = () => {

  const context = useContext(AlertContext);
  const {showAlert} = context;
  const navigate = useNavigate();

  //define state for initialy user details
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  // handle on form sumbit
  const handleFormSumbit = async (e) => {
    e.preventDefault();

    try {
      // post form data on server for check credentials
      const response = await fetch(`${GlobalUrls.LOGIN_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();

      //if credentials right then navigatte main page
      if (json.success) {
        localStorage.setItem("token", json.AuthToken);
        navigate("/");
        showAlert("login Successfully", "success");
      } else {
        showAlert("plese try with right credentials", "danger");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // handle onchnage when user enter data on form
  const handleonChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-5">
         <Alert/>
        <div className="row d-flex flex-md-row-reverse justify-content-center align-items-center ">

        <div className=" col-md-4 mt-md-5">
            <div class="row"> 
                <div class="text-center">
                  <img className="TaskManagerlogo-area" src="/assets/img/TM.webp" alt="profile banner" />
                </div>     
            </div>
          </div>

          <div className="col-md-7 mt-md-5">
            <div className="card shadow rounded-4">
              <div className="card-body p-md-5 p-4">
                <h3 className="text-center mb-4">
                  Login With Your credentials
                </h3>
                {/* form for login data */}
                <form onSubmit={handleFormSumbit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" onChange={handleonChange} value={credentials.email} className="form-control" placeholder="Enter your email" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label"> Password</label>
                    <input type="password" id="password" name="password" onChange={handleonChange} value={credentials.password} className="form-control" placeholder="Enter your password"/>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary"> Login</button>
                  </div>
                </form>
                {/* if user dont have account */}
                <div className="text-center mt-3">
                  <p>
                    Don't have an account?
                    <Link to="/Register" className="text-primary">
                      Register here
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

export default Login;
