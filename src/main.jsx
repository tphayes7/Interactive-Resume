//This program renders the react portion of the web page.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('box-container')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
