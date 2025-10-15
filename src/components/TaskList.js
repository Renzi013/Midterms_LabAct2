import React from "react";

function TaskList({tasks, deletTask}) {
    const confirmDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this task?")){
            deletTask(id);
        }
    };

    return(
<div>
    <h2>Task List View</h2>
    <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {tasks.lengh > 0 ?(
                tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.priority}</td>
                        <td>
                            <button className="btn btn-danger btn-sm"
                            onClick={() => confirmDelete}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ): (
                <tr>
                    <td colSpan="5" className="text-center">
                        No tasks available
                    </td>
                </tr>
            )}
        </tbody>
    </table>
</div>
);
}
export default TaskList