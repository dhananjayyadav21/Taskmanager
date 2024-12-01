import React, { useContext, useState } from "react";
import taskContext from "../context/Task/taskContext";

const TaskIteamsCard = () => {

  const context = useContext(taskContext);
  //  const { task, setTask} = context;

   console.log(context);

  let listOfTask = [
    {
      title: "Test334",
    },
    {
      title: "fdklasjfkljklasfdj",
    },
  ];

  const [taskh, setTaskh] = useState(listOfTask);

  return (
    <>
      {taskh.map((e) => {
        return (
          <div className="col-12">
            <div className="bg-white border rounded-4 shadow-sm  p-3">
              <div className="d-flex justify-content-between align-self-center align-items-center">
                <span className="px-2 py-1 rounded-2 bg-warning">low</span>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <h4 className="fw-bold mb-0 pt-2">{e.title}</h4>
              <p className="mb-0 py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                eum pariatur maiores nulla? Nihil
              </p>
              <span className="fw-bold fs-6">Dedline:</span>
              <span>12/15</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TaskIteamsCard;
