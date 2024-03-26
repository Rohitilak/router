import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <NavLink className={(e)=>{
                  return e.isActive ? "red" : "";
                }} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Contact" className={(e)=>{
                  return e.isActive ? "red" : "";
                }}>Contact</NavLink>
            </li>
            <li>
                <NavLink to="/About"  className={(e)=>{
                  return e.isActive ? "red" : "";
                }}>About</NavLink>
            </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
