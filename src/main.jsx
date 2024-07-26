import './assets/global_style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { PartnersProvider } from './context/PartnersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PartnersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PartnersProvider>
  </React.StrictMode>
)
