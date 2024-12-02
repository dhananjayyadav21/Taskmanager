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

  const [user, setUser] = useState([]);

  return (
    <AuthContext.Provider value={{ user, getUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
