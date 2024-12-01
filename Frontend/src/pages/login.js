import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  //define navigate
  const navigate = useNavigate();

  //define state for initialy user details
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  // handle on form sumbit
  const handleFormSumbit = async (e) => {
    e.preventDefault();

    // post form data on server for check credentials
    const response = await fetch("http://localhost:5000/api/auth/login", {
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
    console.log(json)

    //if credentials right then navigatte main page
    if (json.success) {
      localStorage.setItem("token", json.AuthToken);
      navigate('/')
      alert("login successfully");
    }else{
      alert("plese try with right credentials");
    }
  };

  // handle onchnage when user enter data on form
  const handleonChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow rounded-4">
              <div className="card-body p-md-5 p-4">
                <h3 className="text-center mb-4">
                  Login With Your credentials
                </h3>

                {/* form for login data */}
                <form onSubmit={handleFormSumbit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleonChange}
                      value={credentials.email}
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
                      onChange={handleonChange}
                      value={credentials.password}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
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
