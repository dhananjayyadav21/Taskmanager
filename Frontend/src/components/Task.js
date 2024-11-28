import React from 'react'
import TaskIteamsCard from './TaskIteamsCard'

const Task = () => {

  return (
    <>
      {/* Main container for Task */}
      <div className="container">
        <div className='row gap-md-0 gap-3'>

           {/* Inside the main container to do container */}
            <div className="col-md-4">
                <div className='bg-color-gray p-2 rounded-4' style={{ height: "82vh" }}>
                    <div className='d-flex justify-content-center align-self-center align-items-center gap-2'>
                        <span className='btn btn-primary rounded-circle p-1'></span>
                        <span>To Do</span>
                        <span className='btn btn-sm btn-primary rounded-circle'>5</span>
                     </div>
                    <hr/>

                    <div className='container' style={{overflow:"auto", height:"87%"}}>
                        <div className='row gap-2'>
                            {/* each Task card */}
                            <TaskIteamsCard/>

                        </div>  
                    </div>  
                </div> 
            </div>

            {/* Inside the main container progress container */}
            <div className="col-md-4">
                <div className='bg-color-gray p-2 rounded-4' style={{ height: "82vh" }}>
                    <div className='d-flex justify-content-center align-self-center align-items-center gap-2'>
                        <span className='btn btn-warning rounded-circle p-1'></span>
                        <span>On Progress</span>
                        <span className='btn btn-sm btn-warning rounded-circle'>5</span>
                    </div>
                    <hr/>

                    <div className='container' style={{overflow:"auto", height:"87%"}}>
                        <div className='row gap-2'>

                            {/* each Task card */}
                            <TaskIteamsCard/>
                           
                        </div>
                    </div> 
                </div> 
            </div>

            
           {/* Inside the main container completed container */}
            <div className="col-md-4">
                <div className='bg-color-gray p-2 rounded-4' style={{ height: "82vh" }}>
                    <div className='d-flex justify-content-center align-self-center align-items-center gap-2'>
                        <span className='btn btn-primary rounded-circle p-1'></span>
                        <span>Done</span>
                        <span className='btn btn-sm btn-success rounded-circle'>5</span>
                    </div>
                    <hr/>
                    
                     <div className=" container" style={{overflow:"auto", height:"87%"}}>
                        <div className='row gap-2' >
                            
                            {/* each Task card */}
                            <TaskIteamsCard/>
                            
                        </div> 
                    </div>
              </div> 
            </div>
         </div>
      </div>
    </>
  )
}

export default Task
