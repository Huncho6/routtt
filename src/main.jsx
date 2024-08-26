import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import ThemeContextProvider from './context/ThemeContext.jsx'
import MartContextProvider from './context/MartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeContextProvider>
      <MartContextProvider>
    <App />
    </MartContextProvider>
    </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>
)
