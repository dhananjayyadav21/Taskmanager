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
import FileUpload from "./pages/FileUpload";
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
                <Route path="/fileupload" element={<FileUpload/>} />

                <Route path="https://taskmanagersd.netlify.app/" element={<Home />} />
                <Route path="https://taskmanagersd.netlify.app/login" element={<Login />} />
                <Route path="https://taskmanagersd.netlify.app/Register" element={<Register />} />
                <Route path="https://taskmanagersd.netlify.app/user" element={<Profile />} />
                <Route path="https://taskmanagersd.netlify.app/fileupload" element={<FileUpload/>} />

              </Routes>
            </Router>
          </TaskState>
        </AuthState>
      </AlertState>
    </>
  );
}

export default App;
