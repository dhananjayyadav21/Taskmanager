import React, { useContext } from "react";
import AlertContext from "../context/Alert/AlertContext";

const Alert = () => {
  const context = useContext(AlertContext);
  const { alert } = context;

  if (!alert) return null;

  return (
    <>
      <div className={`alert alert-${alert.type} p-2`}>{alert.message}</div>
    </>
  );
};

export default Alert;
