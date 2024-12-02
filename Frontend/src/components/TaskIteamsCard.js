import React, { useContext, useState } from "react";
import { SharedServive } from "../services/SharedService";
import taskContext from "../context/Task/taskContext";

const TaskIteamsCard = (props) => {

  // take task as a props from where use Taskcarditems
  const{task}=props;

  // take updatetask using context api
  const context = useContext(taskContext);
  const {updateTask} = context;

  const [uTask, SetUTask] = useState({id:"", priority:"", title:"",description:"",status:"" });
  
  // handle edit form and set default value 
  const handleEditForm = (currentTask)=>{
     SetUTask({id:currentTask._id, priority:currentTask.priority, title:currentTask.title, description:currentTask.description, status:currentTask.description});

  }


  //handle form sumbit and task update 
  const handleFormSumbit = (e)=>{
    e.preventDefault();
    updateTask(
      uTask.id,
      uTask.priority,
      uTask.title,
      uTask.description,
      uTask.status,
    );
  }

  //handle form onchange when user input data
  const handleOnChange = (e)=>{
     SetUTask({...uTask, [e.target.name]:e.target.value});
  }



  return (
    <>
          <div className="col-12">
            <div className="bg-white border rounded-4 shadow-sm  p-3">
              <div className="d-flex justify-content-between align-self-center align-items-center">
                <span className={`badge bg-${SharedServive.getClassPriority(task.priority)}`}>{task?.priority}</span>

               {/* update Task Modal =========================================================================== */}
                  <div className="modal fade" id={`editFormModal${task._id}`} aria-hidden="true" aria-labelledby="editFormModalLabel" tabIndex="-1">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="bg-color-gray p-2 modal-content">

                          <div className="modal-header">
                            <span className="btn btn-warning rounded-circle p-1 mx-2"></span>
                            <h1 className="modal-title fs-5"  id="editFormModalToggleLabel" > Edit Task </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                          </div>

                          <div className="modal-body">
                            <form onSubmit={handleFormSumbit}>
                              <div className="mb-3">
                                <label htmlFor="title" className="form-label"> Task Title </label>
                                <input type="text" className="form-control" id="title" name="title" value={uTask.title} onChange={handleOnChange} aria-describedby="emailHelp"/>
                              </div>

                              <div className="mb-3">
                                <label htmlFor="description" className="form-label"> Description  </label>
                                <textarea className="form-control" id="description" name="description" value={uTask.description} onChange={handleOnChange} ></textarea>
                              </div>

                              <div className="container gap-3 d-md-flex mb-4">
                                <div className="container my-2">
                                  <select className="form-select" aria-label="Default select example" name="priority"   value={uTask.priority} onChange={handleOnChange} >
                                    <option value="" disabled hidden> Priority </option>
                                    <option value="high">HIGH</option>
                                    <option value="medium">MEDIUM</option>
                                    <option value="low">LOW</option>
                                  </select>
                                </div>

                                <div className="container my-2">
                                  <select className=" form-select" aria-label="Default select example" name="status" value={uTask.status} onChange={handleOnChange} >
                                    <option value="" disabled hidden>  Status </option>
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
                                  >Save Task
                                </button>
                              </div>

                            </form>
                          </div>  
                        </div>
                      </div>
                    </div>

        
                  {/* <!-- dropdoun for Task edit, delete, assign ======================================== */}
                <div className="btn-group cursor-pointer">
                     <i className="fa-solid fa-ellipsis" data-bs-toggle="dropdown" aria-expanded="false"></i>
                  <ul className="dropdown-menu bg-color-whitis p-2">
                    <div className="gap-2 cursor-pointer" data-bs-target={`#editFormModal${task._id}`} data-bs-toggle="modal" onClick={()=>handleEditForm(task)} >
                       <i className="fa-regular fa-pen-to-square"></i>
                       <span className="mx-2 fw-bold">Edit Task</span>
                    </div>
                    
                    <div className="gap-2 py-2 cursor-pointer">
                       <i className="fa-regular fa-user"></i>
                       <span className="mx-2 fw-bold">Assign User</span>
                    </div>

                    <div className="gap-2 cursor-pointer">
                       <i className="fa-regular fa-trash-can"></i>
                       <span className="mx-2 fw-bold">Delete Task</span>
                    </div>
                  </ul>
                </div>
                {/* ============================================================================================ */}
                
              </div>
              <h4 className="fs-5 mb-0 pt-2">{task?.title}</h4>
              <p className="fs-6 mb-0 py-2">{task?.description}
              </p>
              <span className="fw-bold fs-6">Dedline:</span>
              <span>12/15</span>
            </div>
          </div>
    </>
  );
};

export default TaskIteamsCard;
