import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </StrictMode>,
)
