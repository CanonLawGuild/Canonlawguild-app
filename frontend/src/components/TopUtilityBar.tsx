import React from 'react'
import { Link } from 'react-router-dom'
import AuthStatus from './AuthStatus'

export default function TopUtilityBar(){
  return (
    <div className="top-utility">
      <div className="left">
        <div className="social-links">
          <a href="#">𝕏</a>
          <a href="#">TikTok</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>
      </div>
      <div className="right">
        <Link to="/donate" className="donate-pill">DONATE</Link>
        <Link to="/membership" className="nav-link">MEMBERSHIP</Link>
        <AuthStatus />
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  )
}
