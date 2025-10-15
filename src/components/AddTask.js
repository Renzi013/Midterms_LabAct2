import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddTask({addTask}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!title.trim()){
        alert("Please enter a task title.");
        return;
         }

         const newTask = {
            id: Date.now (),
            title,
            description,
            priority,
         };
       addTask(newTask);
       navigate("/");
        };

        return (
            <div className="container mt-4">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Title</label>
                <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) =>    setTitle(e.target.value)}
              required
              />
            </div>

            <div className="mb-3">
                <label> Description</label>
                <textarea
                className="form-control"
                rows="3"
                value= {description}
                onChange={(e) => setDescription(e.target.value)}
             ></textarea>
            </div>

            <div className="mb-3">
                <label>Priority</label>
                <select
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >   
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
              </select>
            </div>

            <button type="submit" className= "btn btn-primary">AddTask</button>
            </form>
            </div>
                
                );
            }     


export default AddTask;