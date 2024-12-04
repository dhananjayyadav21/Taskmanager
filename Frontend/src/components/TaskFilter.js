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
       <div class="dropdown">
          <button class="btn  btn-light dropdown-toggle" type="button" id="TaskFilterbtn" data-bs-toggle="dropdown" aria-expanded="false">
            Task Filter
           </button>
           <ul class="dropdown-menu" aria-labelledby="TaskFilterbtn">
            <li><h6 className='mx-4 cursor-pointer' onClick={GetAllTask}>All Task</h6></li>
            <li><h6 className='mx-4 cursor-pointer' onClick={Gettask}>My Task</h6></li>
           </ul>
        </div>
    </>
  )
}

export default TaskFilter
