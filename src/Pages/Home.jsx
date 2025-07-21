import React from 'react';
import AddTask from './AddTask';
import { IoIosAddCircleOutline } from "react-icons/io";
import './Home.css'
import { useState } from 'react';
import AllTasks from './AllTasks';

const Home = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div>
            <button onClick={handleShow}>
                <IoIosAddCircleOutline className='icon' />
            </button>

            {show && <AddTask setShow={setShow} />}

            <AllTasks />
        </div>
    );
};

export default Home;