import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthContextProvider from './contexts/authContext'
import './index.css'
import AppContextProvider from './contexts/appContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
