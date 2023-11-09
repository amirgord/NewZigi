import React from 'react'
import ReactDOM from 'react-dom/client'
import HttpRequestHandler from './components/HttpRequestHandler.jsx'
import MongoDBHandler from './components/MongoDBHandler.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HttpRequestHandler />
    <MongoDBHandler />
  </React.StrictMode>,
)
