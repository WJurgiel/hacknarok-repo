import '@mantine/core/styles.css';
import './App.css'
import {createTheme, MantineProvider} from '@mantine/core';
import {BrowserRouter} from "react-router-dom";
import {Routing} from "../pages/Routing.tsx";
import { useCookies, CookiesProvider } from "react-cookie";

const theme = createTheme({
});
function App() {
  return (
      <CookiesProvider>

    <MantineProvider theme={theme}>
        <BrowserRouter>
          <Routing/>
        </BrowserRouter>
    </MantineProvider>
      </CookiesProvider>
  )
}

export default App
