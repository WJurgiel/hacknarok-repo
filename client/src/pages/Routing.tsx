import {Navigate, Route, RouteObject, Routes, useRoutes} from "react-router-dom";
import {Layout} from "../app/Layout.tsx";
import {HomePage} from "./HomePage.tsx";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
interface RoutingProps {
    isAuthenticated: boolean;
}

const routes : RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace/>
            },
            {
                path: "/home",
                element: <HomePage/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    }
]
export const Routing: React.FC<RoutingProps> = ({isAuthenticated}) =>{
    return  <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route
            path="/home"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
    </Routes>
}