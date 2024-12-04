import { useState } from "react";
import AuthContext from "./AuthContext";
import HttpService from "../../services/httpservice";
import * as GlobalUrls from "../../GlobalURL"

const AuthState = (props) => {
  //get user using this function =================================================================================
  const getUser = async () => {
    const json = await HttpService.POST(
        `${GlobalUrls.GETUSER_URL}`
    );
    setUser(json);
  };

  const getAllUser = async () => {
    const json = await HttpService.GET(
      `${GlobalUrls.GETALLUSER_URL}`
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
