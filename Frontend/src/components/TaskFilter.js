import React, { useContext } from 'react'
import taskContext from '../context/Task/taskContext'

const TaskFilter = () => {

    const context = useContext(taskContext);
    const { getTask, getAllTask} = context;

    const GetAllTask = ()=>{
       getAllTask();
    }

    const Gettask = ()=>{
       getTask();
    } 

  return (
    <>
       <div className="dropdown">
          <button className="btn  btn-light dropdown-toggle" type="button" id="TaskFilterbtn" data-bs-toggle="dropdown" aria-expanded="false">
            Task Filter
           </button>
           <ul className="dropdown-menu my-3" aria-labelledby="TaskFilterbtn">
            <li><h6 className='cursor-pointer' onClick={GetAllTask}> <i className="fa-solid fa-house px-2"></i> All Task</h6></li>
            <li><h6 className='cursor-pointer' onClick={Gettask}> <i className="fa-solid fa-code px-2"></i> My Task</h6></li>
           </ul>
        </div>
    </>
  )
}

export default TaskFilter
