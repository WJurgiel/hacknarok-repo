import '@mantine/core/styles.css';
import './App.css'
import {Button, createTheme, MantineProvider} from '@mantine/core';

const theme = createTheme({
});
function App() {
  return (
    <MantineProvider theme={theme}>
        <Button variant="filled">Button</Button>
    </MantineProvider>
  )
}

export default App
