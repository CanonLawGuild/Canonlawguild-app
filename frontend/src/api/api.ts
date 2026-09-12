import axios from 'axios'

// const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000'
const API_BASE = import.meta.env.VITE_API_BASE || 'https://canonlawguild-backend.onrender.com'


const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  timeout: 10000,
})

export function setAuthToken(token?: string){
  if(token){
    api.defaults.headers.common['Authorization'] = `Token ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

export default api
