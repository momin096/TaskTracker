import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const AddTask = ({ setShow }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const status = form.status.value;
        const priority = form.priority.value;
        const email = localStorage.getItem('userEmail'); // Get email from localStorage

        const task = {
            title,
            description,
            date,
            status,
            priority,
            email, // Add user email
        };

        const { data } = await axios.post('https://server-sigma-mocha.vercel.app/task', task);
        console.log(data);
        if (data.insertedId) {
            toast.success('Added')
            setShow(false)
        }
        form.reset();
    };

    return (
        <div>
            <h2>Add a new Task</h2>

            <form onSubmit={handleSubmit} className='task-form'>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" required />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" />
                <label htmlFor="date">Due Date</label>
                <input type="date" name="date" required />

                <div className='radio-container'>
                    <div className="radio-group">
                        <label>Status:</label>
                        <label><input type="radio" name="status" value="Pending" required /> Pending</label>
                        <label><input type="radio" name="status" value="Completed" /> Completed</label>
                    </div>

                    <div className="radio-group">
                        <label>Priority:</label>
                        <label><input type="radio" name="priority" value="Low" required /> Low</label>
                        <label><input type="radio" name="priority" value="Medium" /> Medium</label>
                        <label><input type="radio" name="priority" value="High" /> High</label>
                    </div>
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddTask;
