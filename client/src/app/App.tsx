import '@mantine/core/styles.css';
import './App.css'
import {createTheme, MantineProvider} from '@mantine/core';
import {BrowserRouter} from "react-router-dom";
import {Routing} from "../pages/Routing.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

const theme = createTheme({
});

axios.defaults.withCredentials = true;
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is authenticated (session exists)
        axios
            .get('http://localhost:8080/api/v1/auth/check', { withCredentials: true })
            .then(() => setIsAuthenticated(true))
            .catch(() => setIsAuthenticated(false));
    }, []);

    return (
    <MantineProvider theme={theme}>
        <BrowserRouter>
          <Routing isAuthenticated={isAuthenticated}/>
        </BrowserRouter>
    </MantineProvider>
  )
}

export default App
