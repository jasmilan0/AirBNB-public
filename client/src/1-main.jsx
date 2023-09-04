import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './2-App.jsx'
import './styles/1-index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
