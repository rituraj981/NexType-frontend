/**
 * NexType - Modern File Converter
 * Built by Rituraj981
 */
console.log(
  "%c NexType %c Developed by Rituraj981 %c",
  "color: #fff; background: #8b5cf6; padding: 5px 10px; border-radius: 4px 0 0 4px; font-weight: bold;",
  "color: #fff; background: #1e293b; padding: 5px 10px; font-weight: bold;",
  "background: transparent;"
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // No curly braces for default exports
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)