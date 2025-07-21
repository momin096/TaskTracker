import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AddTask from "../Pages/AddTask";
import MainLayout from "../layout/MainLayout";
import Login from "../Pages/Login";
import EditTask from "../Pages/EditTask";




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
                path: '/login',
                element: <Login />
            },
            {
                path: '/edit/:id',
                element: <EditTask />,
                loader: () => fetch(``)
            },

        ]
    },

]);


export default router