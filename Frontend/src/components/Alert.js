import React, { useContext } from "react";
import AlertContext from "../context/Alert/AlertContext";

const Alert = () => {
  const context = useContext(AlertContext);
  const { alert } = context;

  if (!alert) return null;

  return (
    <>
      <div className={`alert alert-${alert.type} p-2 m-0 Alert-for-mobileScreen Alert-for-computerScreen`}> <strong>Message :</strong> {alert.message} <strong>!!!</strong></div>
    </>
  );
};

export default Alert;
