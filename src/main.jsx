import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FromProvider from "./components/Context/Usecontext.jsx"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FromProvider>
    <App />
    </FromProvider>
  </StrictMode>,
)
