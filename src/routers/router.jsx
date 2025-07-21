import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AddTask from "../Pages/AddTask";
import MainLayout from "../layout/MainLayout";
import Login from "../Pages/Login";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add-task',
                element: <AddTask />
            },
            {
                path: '/login',
                element: <Login />
            },
            
        ]
    },

]);


export default router