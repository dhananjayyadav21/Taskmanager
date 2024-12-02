import React, { useContext, useState } from "react";
import taskContext from "../context/Task/taskContext";

const Sidebar = () => {
  // get context function using context api
  const context = useContext(taskContext);
  const { alltask, addTask } = context;

  // handle form sumbit
  const handleFormSumbit = (e) => {
    e.preventDefault();
    addTask({
      priority: newTask.priority,
      title: newTask.title,
      description: newTask.description,
      status: newTask.status,
    });
  };

  //handle on chnage
  const handleOnChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  //define state for add note
  const [newTask, setNewTask] = useState({
    priority: "",
    title: "",
    description: "",
    status: "",
  });

  return (
    <>
      <div>
        <div className="row">
          <div className="col-12">
            {/* progress details card container */}
            <div className="row gap-2">
              <div className="col-12">
                <div className="bg-color-gray border rounded-4 shadow-sm p-4">
                  <div className="btn btn-danger rounded-circle mb-2">
                    <i className="fa-solid fa-calendar-xmark"></i>
                  </div>
                  <p className="fw-bold mb-0 py-2">Expired Task</p>
                  <span className="fw-bold fs-4">
                    {
                      alltask.filter((task) => {
                        return task.status === "To Do";
                      }).length
                    }
                  </span>
                </div>
              </div>

              <div className="col-12 ">
                <div className="bg-color-gray border rounded-4 shadow-sm  px-3 py-4">
                  <div className="btn btn-warning rounded-circle mb-2">
                    <i className="fa-solid fa-bars-progress"></i>
                  </div>
                  <p className="fw-bold mb-0 py-2">All Active Task</p>
                  <span className="fw-bold fs-4">
                    {
                      alltask.filter((task) => {
                        return task.status === "On Progress";
                      }).length
                    }
                  </span>
                </div>
              </div>

              <div className="col-12">
                <div className="bg-color-gray border rounded-4 shadow-sm p-4">
                  <div className="btn btn-primary rounded-circle mb-2">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <p className="fw-bold mb-0 py-2">Completed Task</p>
                  <span className="fw-bold fs-4">
                    {
                      alltask.filter((task) => {
                        return task.status === "On Progress";
                      }).length
                    }
                    /
                  </span>
                  <span className="fw-bold">
                    {
                      alltask.filter((task) => {
                        return task;
                      }).length
                    }
                  </span>
                </div>
              </div>
            </div>

            {/* Add New Task Modal */}
            <div>
              <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="bg-color-gray p-2 modal-content">
                    <div className="modal-header">
                      <span className="btn btn-warning rounded-circle p-1 mx-2"></span>
                      <h1
                        className="modal-title fs-5"
                        id="exampleModalToggleLabel" >
                        Add New Task
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={handleFormSumbit}>
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label">
                            Task Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={newTask.title}
                            onChange={handleOnChange}
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={newTask.description}
                            onChange={handleOnChange}
                          ></textarea>
                        </div>

                        <div className="container gap-3 d-md-flex mb-4">
                          <div className="container my-2">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              name="priority"
                              value={newTask.priority}
                              onChange={handleOnChange}
                              
                            >
                              <option value="" disabled hidden>
                                Priority
                              </option>
                              <option value="high">HIGH</option>
                              <option value="medium">MEDIUM</option>
                              <option value="low">LOW</option>
                            </select>
                          </div>

                          <div className="container my-2">
                            <select
                              className=" form-select"
                              aria-label="Default select example"
                              name="status"
                              value={newTask.status}
                              onChange={handleOnChange}
                              
                            >
                              <option value="" disabled hidden>
                                Status
                              </option>
                              <option value="To Do">To Do</option>
                              <option value="On Progress">On Progress</option>
                              <option value="Done">Done</option>
                            </select>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal">Save Task
                          </button>
                        </div>
                      </form>
                    </div>  
                  </div>
                </div>
              </div>

              {/* Thank you your task added */}
              <div
                className="modal fade rounded-4 "
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content rounded-4" style={{width:"300px"}}>
                    <div className="container d-flex flex-column justify-content-center align-items-center text-center gap-2 p-3" >
                      <button className="btn btn-dark rounded-4 py-3"style={{width:"25%"}}>Done</button>
                      <h6  style={{width:"100%"}}>New task has been created <br />succesfully</h6>
                      <button
                        className="btn btn-dark"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        style={{width:"90%"}}>
                        Back 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add New Task */}
            <div
              className="bg-blue border rounded-4 shadow-sm p-1 d-flex justify-content-center align-self-center align-items-center gap-3 mt-3"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal" >
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
