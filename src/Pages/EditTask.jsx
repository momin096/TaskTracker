import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './EditTask.css'

const EditTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);

    useEffect(() => {
        axios.get(`https://server-sigma-mocha.vercel.app/task/${id}`)
            .then(res => setTask(res.data))
            .catch(() => toast.error("Failed to fetch task"));
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedTask = {
            title: form.title.value,
            description: form.description.value,
            date: form.date.value,
            status: form.status.value,
            priority: form.priority.value
        };

        const { data } = await axios.patch(`https://server-sigma-mocha.vercel.app/task/${id}`, updatedTask);
        if (data.modifiedCount > 0) {
            toast.success("Task updated successfully");
            navigate('/');
        } else {
            toast.error("No changes made");
        }
    };

    if (!task) return <p>Loading...</p>;

    return (
        <div className="edit-container">
            <h2>Edit Task</h2>
            <form onSubmit={handleUpdate} className='task-form'>
                <label htmlFor="title">Title</label>
                <input defaultValue={task.title} type="text" name="title" required />
                <label htmlFor="description">Description</label>
                <input defaultValue={task.description} type="text" name="description" />
                <label htmlFor="date">Due Date</label>
                <input defaultValue={task.date} type="date" name="date" required />

                <div className='radio-container'>
                    <div className="radio-group">
                        <label>Status:</label>
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value="Pending"
                                defaultChecked={task.status === "Pending"}
                                required
                            /> Pending
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value="Completed"
                                defaultChecked={task.status === "Completed"}
                            /> Completed
                        </label>
                    </div>

                    <div className="radio-group">
                        <label>Priority:</label>
                        <label>
                            <input
                                type="radio"
                                name="priority"
                                value="Low"
                                defaultChecked={task.priority === "Low"}
                                required
                            /> Low
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="priority"
                                value="Medium"
                                defaultChecked={task.priority === "Medium"}
                            /> Medium
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="priority"
                                value="High"
                                defaultChecked={task.priority === "High"}
                            /> High
                        </label>
                    </div>

                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default EditTask;
