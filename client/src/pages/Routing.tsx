import {Navigate, RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../app/Layout.tsx";
import {HomePage} from "./HomePage.tsx";
import Login from "./Login.tsx";

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
            }
        ]
    }
]
export const Routing = () =>{
    return useRoutes(routes)
}