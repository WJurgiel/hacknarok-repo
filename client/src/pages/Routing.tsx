import {Navigate, RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../app/Layout.tsx";
import {HomePage} from "./HomePage.tsx";

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
                path: "/test",
                element: <>Test website</>
            }
        ]
    }
]
export const Routing = () =>{
    return useRoutes(routes)
}