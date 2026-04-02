import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style.scss'
import App from './App.jsx'
import ProjectsPage from './ProjectsPage.jsx'

const cleanPath = window.location.pathname.replace(/\/+$/, "") || "/";
const RootComponent = cleanPath === "/projects" ? ProjectsPage : App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>,
)
