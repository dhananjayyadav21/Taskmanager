import { useState } from "react";
import AuthContext from "./AuthContext";
import HttpService from "../../services/httpservice";

const AuthState = (props) => {
  //get user using this function =================================================================================
  const getUser = async () => {
    const json = await HttpService.POST(
      "http://localhost:5000/api/auth/getUser"
    );
    setUser(json);
  };

  const getAllUser = async () => {
    const json = await HttpService.GET(
      "http://localhost:5000/api/auth/getAllUser"
    );
    console.log(json)
    setAllUser(json);
  };


  const [user, setUser] = useState([]);
  const [allUser, setAllUser] = useState([]);

  return (
    <AuthContext.Provider value={{ user, getUser,allUser,getAllUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
