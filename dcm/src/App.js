import React,{useState} from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import Log from "./component/Log.js";
import Todo from "./component/Todo";
import Attendance from "./component/Attendance";
import Policy from "./component/Policy";
import Firstpage from "./component/Firstpage";
import { BrowserRouter as Router, Routes, Route, redirect} from "react-router-dom";
import Task from "./component/Task";
import Attendanceexport from "./component/Attendanceexport";


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();
  
  if (!authenticated) {
    history.push('/Log');
  }


  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/Firstpage" element={<Firstpage />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Attendanceexport" element={<Attendanceexport />} />
          
        </Routes>
      </Router>
    
  );
}
export default App;
