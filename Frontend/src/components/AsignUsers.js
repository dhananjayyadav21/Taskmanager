import React from 'react'

const AsignUsers = (props) => {

  const {UserName, closeAssignClick, user,task, UserId} = props 

  return (
    <>
      <div onClick={()=> closeAssignClick(user,task)} class="container rounded-2 my-2 py-1 d-flex justify-content-start align-items-center align-self-center bg-color-whitis" style={{width:"80%"}}>
       <img src="/assets/img/avtar.png" alt="User Avatar" className="rounded-circle mx-2" width="60" height="60" />
       <div>
        <h5 className='m-0'>{UserName}</h5>
        <p className='m-0'>{UserId}</p>
       </div>
     </div>
    </>
  )
}

export default AsignUsers
