import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { PartnersProvider } from './context/PartnersContext.jsx'
import './assets/global_style.css'
import 'leaflet/dist/leaflet.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PartnersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PartnersProvider>
  </React.StrictMode>
)
