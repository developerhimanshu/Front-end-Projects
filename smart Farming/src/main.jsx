import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import './index.css'

const rootHtml = document.getElementById('root')
ReactDOM.createRoot(rootHtml).render(
    <AuthContextProvider>
     <App />
    </AuthContextProvider>

)