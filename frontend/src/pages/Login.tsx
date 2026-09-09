import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import api, { setAuthToken } from '../api/api'

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(localStorage.getItem('cl_token')))

  function updateAuthState(){
    setIsLoggedIn(Boolean(localStorage.getItem('cl_token')))
  }

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    setError(null)
    try{
      const res = await api.post('/api-token/token-auth/', {username, password})
      const token = res.data.token
      setAuthToken(token)
      localStorage.setItem('cl_token', token)
      updateAuthState()
      window.location.href = '/' // redirect to home
    }catch(err:any){
      setError('Invalid credentials')
    }
  }

  function handleLogout(){
    localStorage.removeItem('cl_token')
    setAuthToken()
    updateAuthState()
    window.location.href = '/login'
  }

  return (
    <div className="container mt-md auth-container">
      <div className="auth-grid">
        <main className="auth-main card">
          <h1 className="auth-title">{isLoggedIn ? 'Logout' : 'Login'}</h1>
          <p className="muted">Not yet a member of the Canon Law Sodality? <Link to="/membership/join" className="accent-link">Join here.</Link></p>

          {isLoggedIn ? (
            <div className="auth-form">
              <p className="muted">You are already signed in.</p>
              <div className="form-actions">
                <button type="button" className="btn btn-muted" onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">Username or E-mail</label>
                <input className="input-field" value={username} onChange={e=>setUsername(e.target.value)} />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="input-field" value={password} onChange={e=>setPassword(e.target.value)} />
              </div>

              <div className="form-row">
                <label className="checkbox-inline"><input type="checkbox" /> Remember Me</label>
              </div>

              {error && <div className="text-muted">{error}</div>}

              <div className="form-actions">
                <button type="submit" className="btn btn-muted">Log In</button>
              </div>

              <div className="mt-sm">
                <a href="#" className="forgot-link">Forgot Password</a>
              </div>
            </form>
          )}
        </main>

        <aside className="auth-sidebar card">
          <h3>UPCOMING EVENTS</h3>
          <ul className="muted">
            <li>No events</li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
