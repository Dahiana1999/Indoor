import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Styles/header.css'
import './Styles/First.css'
import './Styles/Second.css'
import './Styles/Footer.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
