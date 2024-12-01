import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import TaskState from "./context/Task/TaskState";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <TaskState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/user" element={<Profile/>} /> 
          </Routes>
        </Router>
      </TaskState>
    </>
  );
}

export default App;
