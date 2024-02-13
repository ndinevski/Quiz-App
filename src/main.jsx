import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppContextProvider from './store/app-context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppContextProvider><App /></AppContextProvider>,
)
