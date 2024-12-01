import React from 'react'
import HttpService from '../services/httpservice';

const Profile = () => {

  return (
    <>
       <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow rounded-3">
                    <div className="card-header text-center bg-primary text-white rounded-top-3">
                        <h4>User Profile</h4>
                    </div>
                    <div className="card-body text-center">
                        <img src="https://via.placeholder.com/150" alt="User Avatar" className="rounded-circle mb-3" width="150" height="150"/>
                        <h5 className="card-title">John Doe</h5>
                        <p className="text-muted">johndoe@example.com</p>
                        <div className="mb-3">
                            <p><strong>Phone:</strong> +1 123 456 7890</p>
                            <p><strong>Address:</strong> 123 Street, City, Country</p>
                        </div>
                       
                       <div>
                       <a href="/" className="btn btn-danger btn-sm">Logout</a>
                       </div>
                       
                       
                    </div>
                    <div className="card-footer text-center text-muted py-3">
                        Member since January 2023
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile
