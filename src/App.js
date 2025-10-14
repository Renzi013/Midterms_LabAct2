 import Reacr from "react";
 import {BrowserRouter as Router, Routes, Route} from "react-router-dom ";
 import NavBar from "./components/NavBar";
 import TaskList from "./components/TaskList";
 import AddTask from "./components/AddTask";

 function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container mt-4">
      <Routes>
      <Route path="/"element={<TaskList/>}/>
      <Route path="/add"element={<AddTask/>}/>
      </Routes>
       </div>
    </Router>


  );
  
 }

 export default App;