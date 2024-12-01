import React from "react";

const Sidebar = () => {
  return (
    <>
        <div>
          <div className="row">
            <div className="col-12">  

           {/* progress details card container */}
            <div className="row gap-3">
              <div className="col-12">              
                <div className="bg-color-gray border rounded-4 shadow-sm p-3" >
                  <div className="btn btn-danger rounded-circle mb-2">
                      <i className="fa-solid fa-calendar-xmark"></i>
                  </div>
                  <p className="fw-bold mb-0 py-2">Expired Task</p>
                  <span className="fw-bold fs-4">5</span>
                </div>
              </div>

              <div className="col-12 "> 
                <div className="bg-color-gray border rounded-4 shadow-sm  px-3 py-4" >
                  <div className="btn btn-warning rounded-circle mb-2">
                      <i className="fa-solid fa-bars-progress"></i>
                  </div>
                  <p className="fw-bold mb-0 py-2">All Active Task</p>
                  <span className="fw-bold fs-4">7</span>
                </div>
              </div>

              <div className="col-12"> 
                <div className="bg-color-gray border rounded-4 shadow-sm p-3" >
                  <div className="btn btn-primary rounded-circle mb-2">
                      <i className="fa-regular fa-clock"></i>
                  </div>
                  <p className="fw-bold mb-0 py-2">Completed Task</p>
                  <span className="fw-bold fs-4">2/</span><span className="fw-bold">7</span>
                </div>
              </div>
            </div>

               {/* Add New Task Modal */}
                <div>
                      
                  {/* Add Task     */}
                  <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <span className="btn btn-warning rounded-circle p-1 mx-2"></span> 
                          <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Add New Task</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <div className="d-flex justify-content-between align-items-center">
                          <h4 className="mx-4">Task1</h4>
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                          </div>
                          <hr />
                          <p className="mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus hic error mollitia asperiores distinctio, culpa dignissimos iste labore? Nisi modi eligendi iusto esse accusamus eaque quas, rerum ratione repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus hic error mollitia asperiores distinctio, culpa dignissimos iste labore? Nisi modi eligendi iusto esse accusamus eaque quas, rerum ratione repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus hic error mollitia asperiores distinctio, culpa dignissimos iste labore? Nisi modi eligendi iusto esse accusamus eaque quas, rerum ratione repellat?</p> 
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thank you your task added */}
                  <div className="modal fade rounded-4 " id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body p-4 d-flex-coulm align-self-center align-items-center  ">
                          <button className="btn btn-dark rounded-4 py-4 px-3">Done</button>
                          <h5>New task has been created succesfully</h5>
                          <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary d-none" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>

                </div>

            {/* Add New Task */}
              <div className="bg-blue border rounded-4 shadow-sm p-1 d-flex justify-content-center align-self-center align-items-center gap-3 mt-3" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" >
                <i className="fa-sharp-duotone fa-solid fa-plus"></i>
                <p className="fw-bold mb-0 py-2">Add Task</p>
              </div>

            </div>
          </div>
        </div>
    </>
  );
};

export default Sidebar;
