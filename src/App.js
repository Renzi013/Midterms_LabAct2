 import React, {useState} from "react";
 import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
 import NavBar from "./components/NavBar";
 import TaskList from "./components/TaskList";
 import AddTask from "./components/AddTask";

 function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <NavBar/>
      <div className="container mt-4">
      <Routes>
      <Route path="/" element={<TaskList tasks={tasks} deleteTask={deleteTask} />} />
      <Route path="/add" element={<AddTask addTask={addTask} />} />
      </Routes>
       </div>
    </Router>
  );
 }

 export default App;