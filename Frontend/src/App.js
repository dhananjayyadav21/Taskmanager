import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import TaskSytate from "./context/Task/TaskSytate";

function App() {
  return (
    <>
     <TaskSytate/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
      <TaskSytate/>

    </>
  );
}

export default App;
