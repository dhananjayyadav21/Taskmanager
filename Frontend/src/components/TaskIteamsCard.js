import React from "react";
import { SharedServive } from "../services/SharedService";

const TaskIteamsCard = (props) => {

  // take task as a props from where use Taskcarditems
  const{task}=props;

  return (
    <>
          <div className="col-12">
            <div className="bg-white border rounded-4 shadow-sm  p-3">
              <div className="d-flex justify-content-between align-self-center align-items-center">
                <span className={`badge bg-${SharedServive.getClassPriority(task.priority)}`}>{task?.priority}</span>
                <i className="fa-solid fa-ellipsis"></i>
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
