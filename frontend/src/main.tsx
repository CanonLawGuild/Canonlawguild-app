import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import api, { setAuthToken } from './api/api'
import '../static/css/styles.css'

// If a token exists from a previous session, apply it to axios defaults
const token = localStorage.getItem('cl_token')
if(token){
  setAuthToken(token)
}

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
