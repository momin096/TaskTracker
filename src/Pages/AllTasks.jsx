import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './AllTasks.css';
import { Link } from "react-router-dom";


const AllTasks = () => {
    const [tasks, setTasks] = useState([]);
    const email = localStorage.getItem('fakeToken');

    const fetchTasks = async () => {
        const { data } = await axios.get(`http://localhost:5000/tasks?email=${email}`);
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this task?");
        if (!confirm) return;
        

        const { data } = await axios.delete(`http://localhost:5000/task/${id}`);
        if (data.deletedCount > 0) {
            toast.success("Task deleted successfully");
            fetchTasks();
        }
    };

    return (
        <div className="all-tasks-container">
            <h2 className="tasks-title">📋 Your Tasks</h2>

            {tasks.length === 0 ? (
                <p className="no-tasks-msg">No tasks found. Add some!</p>
            ) : (
                <div className="tasks-grid">
                    {tasks.map(task => (
                        <div key={task._id} className="task-card">
                            <h3 className="task-title">{task.title}</h3>
                            <p className="task-desc">{task.description}</p>
                            <div className="task-meta">
                                <p><strong>Date:</strong> {task.date}</p>
                                <p><strong>Status:</strong> <span className={`status ${task.status.toLowerCase()}`}>{task.status}</span></p>
                                <p><strong>Priority:</strong> <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span></p>
                            </div>

                            <div className="task-actions">
                                <button
                                    onClick={() => handleDelete(task._id)}
                                    className="btn delete-btn"
                                >
                                    Delete
                                </button>
                                <button className="btn edit-btn">
                                    <Link to={`/edit/${task._id}`}>
                                        Edit
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllTasks;
