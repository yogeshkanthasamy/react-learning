import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import './Style.css';
export default function Navbar() {
  return (
    <div>
        <nav className='nav-bar'>
      <NavLink to='/' className='nav-item'>Home</NavLink>
      <NavLink to='/Services'  className='nav-item'>Services</NavLink>
      <NavLink to='/Singup' className='nav-item'>Signup</NavLink>
      <NavLink to='/Login'  className='nav-item'>Login</NavLink>
      <NavLink to='/Profile'  className='nav-item'>Profile</NavLink>
      <NavLink to='/About'  className='nav-item'>About</NavLink>
      <NavLink to='/Admin'  className='nav-item'>Admin</NavLink>
      <NavLink to='/Adminshow'  className='nav-item'>Adminshow</NavLink>
      </nav>
    </div>
  )
}
