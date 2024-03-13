import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register.jsx"
import Login from "../Pages/Login/Login.jsx";
import Carts from "../Pages/Cart/Carts.jsx";
import ErrorPage from "../Pages/Error/ErrorPage.jsx";
import AdminPanel from "../Layouts/AdminPanel.jsx";
import AdminLogin from "../adminSystem/Login/AdminLogin.jsx";
import Dashboard from "../adminSystem/dashboard/dashboard/Dashboard.jsx";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/cart",
                element:<Carts/>
            },
        ]
    },
    {
        path:"/admin",
        element:<AdminPanel/>,
        children:[
            {
                path: "/admin",
                element: <AdminLogin/>
            },
            {
                path:"/admin/dashboard",
                element:<Dashboard/>
            }
        ]
    }

])

export default routes