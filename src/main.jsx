import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style.scss'
import Mainroute from './Mainroute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mainroute />
  </StrictMode>,
)
