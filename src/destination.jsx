import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Destination from './destinationApp.jsx'

ReactDOM.createRoot(document.getElementById('destination')).render(
  <React.StrictMode>
    <Destination />
  </React.StrictMode>,
)