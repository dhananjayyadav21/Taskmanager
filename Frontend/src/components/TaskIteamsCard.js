import React, { useContext, useRef, useState } from "react";
import { SharedServive } from "../services/SharedService";
import taskContext from "../context/Task/taskContext";
import AsignUsers from "./AsignUsers";
import AuthContext from "../context/Auth/AuthContext";

const TaskIteamsCard = (props) => {
  // take task as a props from where use Taskcarditems
  const { task } = props;

  const context = useContext(taskContext);
  const { updateTask,deleteTask } = context;

  const GetAllUser = useContext(AuthContext);
  const {allUser, getAllUser} = GetAllUser;

  //=========================================== Handle Edit Task ================================================
  const [uTask, SetUTask] = useState({
    id: "",
    priority: "",
    title: "",
    description: "",
    status: "",
  });

  // handle edit form and set default value
  const handleEditForm = (currentTask) => {
    SetUTask({
      id: currentTask._id,
      priority: currentTask.priority,
      title: currentTask.title,
      description: currentTask.description,
      status: currentTask.status,
    });
  };

  //handle form sumbit and task update
  const handleFormSumbit = (e) => {
    e.preventDefault();
    updateTask({
      id: uTask.id,
      priority: uTask.priority,
      title: uTask.title,
      description: uTask.description,
      status: uTask.status,
    });
  };

  //handle form onchange when user input data
  const handleOnChange = (e) => {
    SetUTask({ ...uTask, [e.target.name]: e.target.value });
  };

  //========================================== Handle Delete Task =================================================
   const handleDeleteTask = (task)=>{
    deleteTask(task._id);
   }

   //========================================== Handle Asign user ===================================================
   const ref = useRef();
   const refClose = useRef();
 
   const handleAsignUserClick = (currentTask)=>{
      SetUTask({
        id: currentTask._id,
        priority: currentTask.priority,
        title: currentTask.title,
        description: currentTask.description,
        status: currentTask.status,
        Auser:currentTask.Auser
      });
      
      getAllUser();
      console.log("bbe------------->",allUser);
      console.log("bb------------->",task);
      ref.current.click();
   }

   const closeAssignClick = (user,task)=>{
    updateTask({
      id: task._id,
      priority: task.priority,
      title: task.title,
      description: task.description,
      status: task.status,
      Auser:user.name
    });

    refClose.current.click();
    console.log("updated task------------->",task);
    console.log("updated user------------->",user);
   }


  return (
    <>
      <div className="col-12">
        <div className="bg-white border rounded-4 shadow-sm  p-3">
          <div className="d-flex justify-content-between align-self-center align-items-center">
            <span className={`badge bg-${SharedServive.getClassPriority(task.priority )}`}>
              {task?.priority}
            </span>

            {/*========================================== update Task Modal ================================================ */}
            <div className="modal fade" id={`editFormModal${task._id}`} aria-hidden="true"  aria-labelledby="editFormModalLabel" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className="bg-color-gray p-2 modal-content">

                  <div className="modal-header">
                    <span className="btn btn-warning rounded-circle p-1 mx-2"></span>
                    <h1 className="modal-title fs-5"  id="editFormModalToggleLabel"> Edit Task </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                  </div>

                  <div className="modal-body">
                    <form onSubmit={handleFormSumbit}>

                      <div className="mb-3">
                        <label htmlFor="title" className="form-label"> Task Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={uTask.title} onChange={handleOnChange} aria-describedby="emailHelp"/>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description" className="form-label"> Description  </label>
                        <textarea className="form-control" id="description" name="description" value={uTask.description} onChange={handleOnChange}  ></textarea>
                      </div>

                      <div className="container gap-3 d-md-flex mb-4">
                        <div className="container my-2">
                          <select className="form-select" aria-label="Default select example" name="priority" value={uTask.priority} onChange={handleOnChange}  >
                            <option value="" disabled>Priority </option>
                            <option value="high">HIGH</option>
                            <option value="medium">MEDIUM</option>
                            <option value="low">LOW</option>
                          </select>
                        </div>

                        <div className="container my-2">
                            <select className=" form-select" aria-label="Default select example" name="status" value={uTask.status} onChange={handleOnChange}  >
                              <option value="" disabled>Status</option>
                              <option value="To Do">To Do</option>
                              <option value="On Progress">On Progress</option>
                              <option value="Done">Done</option>
                            </select>
                          </div>

                      </div>

                      <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                          Save Task
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================== User Assigne  ========================================*/}
            <div  className="modal fade" id="AssignUserContainer" aria-hidden="true" aria-labelledby="AssignUserContainerLabel" tabIndex="-1" >
              <div className="modal-dialog modal-dialog-centered">
                <div className="deleteacount modal-content bg-color-gray">
                  <div className="modal-header">
                    <h5 className="modal-title text-center" id="AssignUserContainerLabel"> Assign User </h5>
                    <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">{allUser.map((user)=><AsignUsers closeAssignClick={closeAssignClick} user={user} task={task} UserName={user.name} UserId={user._id}/>)} </div>
                  <div className="modal-footer d-none">
                    <button  ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button  type="button" className="btn btn-danger"> Assign </button>
                  </div>
                </div>
              </div>
            </div>
            <a ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal"  href="#AssignUserContainer" role="button"> Open modal
            </a>
            

            {/* ===================================== Dropdoun for Task edit, delete ========================================*/}
            <div className="btn-group cursor-pointer">
              <i className="fa-solid fa-ellipsis px-4 py-1" data-bs-toggle="dropdown" aria-expanded="false"></i>
              <ul className="dropdown-menu bg-color-whitis p-2">

                <div className="gap-2 cursor-pointer"  data-bs-target={`#editFormModal${task._id}`}  data-bs-toggle="modal"  onClick={() => handleEditForm(task)} >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <span className="mx-2 fw-bold">Edit Task</span>
                </div>

                <div className="gap-2 py-2 cursor-pointer" onClick={()=> handleAsignUserClick(task)}>
                  <i className="fa-regular fa-user"></i>
                  <span className="mx-2 fw-bold">Assign User</span>
                </div>

                <div className="gap-2 cursor-pointer" onClick={()=> handleDeleteTask(task)} >
                  <i className="fa-regular fa-trash-can"></i>
                  <span className="mx-2 fw-bold">Delete Task</span>
                </div>
              </ul>
            </div>


          {/* ===================================== Remaining Card Parts================================================= */}
          </div>
            <h4 className="fs-5 mb-0 pt-2">{task?.title}</h4>
            <p className="fs-6 mb-0 py-2">{task?.description}</p>
            <span className="fw-bold fs-6">Dedline:</span>
            <span className="mx-1">{new Date(task.deadline).toLocaleString()}</span>
        </div>
      </div>
    </>
  );
};

export default TaskIteamsCard;
