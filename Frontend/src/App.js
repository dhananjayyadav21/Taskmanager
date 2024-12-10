import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import TaskState from "./context/Task/TaskState";
import Profile from "./components/Profile";
import AuthState from "./context/Auth/AuthState";
import AlertState from "./context/Alert/AlertState";
import LoadingBar from "react-top-loading-bar";

function App() {

  const [Progress, setProgress] = useState(0);

  return (
    <>
      <AlertState>
        <AuthState>
          <TaskState>
            <Router>
              <Navbar />
              <LoadingBar color="#00f7ff" progress={Progress} />
              <Routes>
                <Route path="/" element={<Home setProgress={setProgress} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/user" element={<Profile />} />
              </Routes>
            </Router>
          </TaskState>
        </AuthState>
      </AlertState>
    </>
  );
}

export default App;
