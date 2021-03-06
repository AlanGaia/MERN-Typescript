import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">My Videos</Link >
          <Link className="nav-link" to="/new-video">Create a new Video</Link >
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/new-video">Create a new Video</Link >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
