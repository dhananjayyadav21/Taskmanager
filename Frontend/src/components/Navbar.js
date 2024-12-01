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

                  <div className="d-flex gap-2">
                    <Link
                      className="btn btn-warning mx-1 rounded-4"
                      to="/login"
                    >
                      login
                    </Link>
                    <Link
                      className="btn btn-warning mx-1 rounded-4"
                      to="/Register"
                    >
                      Sign Up
                    </Link>
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
