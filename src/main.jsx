import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import createTheme from '@mui/material/styles/createTheme';
import {ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3F72AF',  // Color principal
      light: '#DBE2EF',  // Color más claro
      dark: '#112D4E',   // Color más oscuro
    },
    secondary: {
      main: '#F9F7F7',  // Color secundario
    },
    text: {
      primary: '#112D4E',  // Texto primario oscuro
      secondary: '#DBE2EF',  // Texto secundario claro
    },
    error: {
      main: '#b71c1c',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
