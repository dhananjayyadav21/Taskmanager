import React from 'react'

const AsignUsers = (props) => {

  const {UserName, closeAssignClick, user,task, UserId} = props 

  return (
    <>
      <div onClick={()=> closeAssignClick(user,task)} class="container rounded-4 my-2 py-2 d-flex justify-content-start align-items-center align-self-center bg-color-whitis" style={{width:"95%"}}>
       <img src="/assets/img/avtar.png" alt="User Avatar" className="rounded-circle mx-2" width="50" height="50" />
       <div>
        <h6 className='m-0'>{UserName}</h6>
        <p className='m-0'>{UserId}</p>
       </div>
     </div>
    </>
  )
}

export default AsignUsers
