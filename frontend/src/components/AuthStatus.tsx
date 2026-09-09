// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function AuthStatus(){
//   const token = localStorage.getItem('cl_token')
//   if(token){
//     return <div className="auth-status">Logged in</div>
//   }
//   return <Link to="/login" className="btn btn-ghost">Login</Link>
// }




import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AuthStatus(){
  const navigate = useNavigate()
  const token = localStorage.getItem('cl_token')

  const handleLogout = () => {
    // 1. Remove the token from local storage
    localStorage.removeItem('cl_token')
    
    // 2. Redirect the user back to the login page or home page
    navigate('/login')
    
    // 3. Force a quick page refresh to update the global navbar state
    window.location.reload()
  }

  if(token){
    return (
      <button onClick={handleLogout} className="btn btn-ghost logout-btn">
        Logout
      </button>
    )
  }

  return <Link to="/login" className="btn btn-ghost">Login</Link>
}
