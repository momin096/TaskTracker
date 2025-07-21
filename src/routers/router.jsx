import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AddTask from "../Pages/AddTask";
import MainLayout from "../layout/MainLayout";
import App from "../App";




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
                path: '/app',
                element: <App/>
            }
        ]
    },

]);


export default router