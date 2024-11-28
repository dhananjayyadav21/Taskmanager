import React from 'react'

const Navbar = () => {
  return (
    <>
       {/* Nav bar */}
       <div className="row">
            <div className="col-12">
              <div className="bg-color-gray p-3 border rounded-4">

                 {/* Search Box */}
                <div className="d-md-flex justify-content-between">
                  <div className="">
                      <input type="email" className="form-control rounded-4 py-2 px-4" id="search" aria-describedby="emailHelp" placeholder="search Project" style={{width:"250px"}}/>
                  </div>

                  </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Navbar
