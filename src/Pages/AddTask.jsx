import React from 'react';

const AddTask = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;

        console.log(title, description, date);
    }
    return (
        <div>
            <h2>Add a new Task</h2>

            <form
            onSubmit={handleSubmit}
            className='task-form'>
                <label htmlFor="title">Title</label>
                <input  type="text" name="title" id="" required />
                <label htmlFor="title">Description</label>
                <input type="text" name="description" id=""  />
                <label htmlFor="title">Due Date</label>
                <input type="date" name="date"  id=""  required/>
                <div className='radio-container'>
                    <div className="radio-group">
                        <label>Status:</label>
                        <label><input type="radio" name="status" value="Pending" /> Pending</label>
                        <label><input type="radio" name="status" value="Completed" /> Completed</label>
                    </div>

                    <div className="radio-group" >
                        <label>Priority:</label>
                        <label><input type="radio" name="priority" value="Low" /> Low</label>
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