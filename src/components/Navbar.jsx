import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className="Navbar">
        <Link to="/" className="logo"><img src={`${logo}`}></img></Link>
        <NavLink to="/" className="navlink">Home</NavLink>
        <NavLink to="/about" className="navlink">About</NavLink>
        <NavLink to="/cards" className="navlink">Cards List</NavLink>
        <NavLink to="/extra" className="navlink">Extra</NavLink>
        <NavLink to="/contacts" className="navlink">Contacts</NavLink>
    </div>
  )
}

export default Navbar