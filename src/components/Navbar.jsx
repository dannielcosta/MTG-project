import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import logo from '../images/logo.png'
import brw from '../images/brw-logo.png'

function Navbar() {
  return (
    <div className="Navbar">
        <Link to="/" className="logo"><img src={`${brw}`}></img></Link>
        <NavLink to="/cards" className="navlink">Cards List</NavLink>
        <NavLink to="/create-your-card/" className="navlink">Create Your Card</NavLink>
        <NavLink to="/facts" className="navlink">Fun Facts</NavLink>
    </div>
  )
}

export default Navbar