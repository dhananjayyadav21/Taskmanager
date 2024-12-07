import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import TaskState from "./context/Task/TaskState";
import Profile from "./components/Profile";
import AuthState from "./context/Auth/AuthState";
import AlertState from "./context/Alert/AlertState";
function App() {
  return (
    <>
      <AlertState>
        <AuthState>
          <TaskState>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
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
