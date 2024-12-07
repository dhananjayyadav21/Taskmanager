import React, { useContext, useState } from "react";
import { SharedServive } from "../services/SharedService";
import taskContext from "../context/Task/taskContext";
import AuthContext from "../context/Auth/AuthContext";
import AlertContext from "../context/Alert/AlertContext";

const TaskIteamsCard = (props) => {
  // take task as a props from where use Taskcarditems
  const { task } = props;

  const showcontext = useContext(AlertContext);
  const {showAlert} = showcontext;

  const context = useContext(taskContext);
  const { updateTask,deleteTask } = context;

  const GetAllUser = useContext(AuthContext);
  const {allUser, getAllUser} = GetAllUser;

  const capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

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
  const handleFormSumbit = async (e) => {
    e.preventDefault();
   const isSuccess = await updateTask({
      id: uTask.id,
      priority: uTask.priority,
      title: uTask.title,
      description: uTask.description,
      status: uTask.status,
    });
    if (isSuccess) {
      showAlert("Task Update Successfuly", "warning");
    } else {
      showAlert("This task you can not update", "danger")
    }
    
  };

  //handle form onchange when user input data
  const handleOnChange = (e) => {
    SetUTask({ ...uTask, [e.target.name]: e.target.value });
  };

  //========================================== Handle Delete Task =================================================
   const handleDeleteTask = async (task)=>{
    const isSuccess = await deleteTask(task._id);
    if (isSuccess) {
      showAlert("Task Deleted Successfuly", "success");
    }else{
      showAlert("This task you can not delete", "danger");
    }
   }

   //========================================== Handle Asign user ===================================================
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
   }
   
   const closeAssignClick = async (user,task)=>{
    const isSuccess = await updateTask({
      id: task._id,
      priority: task.priority,
      title: task.title,
      description: task.description,
      status: task.status,
      Auser:user.name
    });
    if (isSuccess) {
      setSelectedUser(user.name);
      showAlert(`${capitalizeFirstLetter(task.title)} task assigned to ${user.name} you Successfuly`, "info")
    }else{
      showAlert(`${capitalizeFirstLetter(task.title)} can not assigned to ${user.name}`, "danger")
    }
   }

   const [selectedUser, setSelectedUser] = useState(task?.Auser);

   /* ========================================================================================================================== */


   
  return (
    <>
      <div className="col-12" taskid={task._id}>
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

            {/* ===================================== Dropdoun for Task edit, delete ========================================*/}
            <div className="btn-group cursor-pointer">
              <i className="fa-solid fa-ellipsis px-4 py-1" data-bs-toggle="dropdown" aria-expanded="false"></i>

              <ul className="dropdown-menu bg-color-whitis px-2 py-0 ">
                <div className="my-2 cursor-pointer"  data-bs-target={`#editFormModal${task._id}`}  data-bs-toggle="modal"  onClick={() => handleEditForm(task)} >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <span className="mx-2 fw-bold">Edit Task</span>
                </div>

                <div className="my-2 cursor-pointer" onClick={()=> handleDeleteTask(task)} >
                  <i className="fa-regular fa-trash-can"></i>
                  <span className="mx-2 fw-bold">Delete Task</span>
                </div>
              </ul>
            </div>


          {/* ===================================== Remaining Card Parts================================================= */}
            </div>
              <h4 className="fs-5 mb-0 pt-2">{capitalizeFirstLetter(task?.title.slice(0,18))}</h4>
              <p className="fs-6 mb-0 py-2">{capitalizeFirstLetter( task?.description.slice(0,100))}</p>
  
              <div className="dropdown m-0 p-0">
                <a className="btn text-start p-0 m-0 " href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"70%"}} onClick={()=> handleAsignUserClick(task)}>    
             
              {selectedUser === null?(<>
                  <div className="dropdown-item container rounded-2 my-1 py-1 cursor-pointer  bg-color-whiti" style={{width:"100%"}}>
                    <div>
                      <h6 className='py-1 mx-3 mb-0'>Not Assigned</h6>
                    </div>
                  </div> </>):(<>
                  <div className="dropdown-item container rounded-2 my-1 py-1 cursor-pointer d-flex justify-content-start align-items-center align-self-center bg-color-whiti" style={{width:"100%"}}>
                    <img src="/assets/img/avtar.png" alt="User Avatar" className="rounded-circle mx-2" width="30" height="30" />
                    <div>
                      <h6 className='m-0'>{selectedUser}</h6>
                    </div>
                  </div></>)}
                </a>

                <ul className="dropdown-menu rounded-3 p-1" aria-labelledby="dropdownMenuLink" style={{width:"100%"}}> 
                {allUser.map((user)=> 
                  <li key={user._id}>
                    <div className="dropdown-item container rounded-2 my-1 py-1 cursor-pointer d-flex justify-content-start align-items-center align-self-center bg-color-whiti" style={{width:"100%"}} onClick={()=>closeAssignClick(user,task)}>
                      <img src="/assets/img/avtar.png" alt="User Avatar" className="rounded-circle mx-2" width="30" height="30" />
                      <div>
                        <h6 className='m-0'>{user.name}</h6>
                        <p className='m-0'>{user._id.slice(0,12)}</p>
                      </div>
                    </div>
                  </li>)}
                </ul>
              </div>

            <span className="fw-bold fs-6">Dedline:</span>
            <span className="mx-1">{new Date(task.deadline).toLocaleString()}</span>
        </div>
      </div>
    </>
  );
};

export default TaskIteamsCard;
