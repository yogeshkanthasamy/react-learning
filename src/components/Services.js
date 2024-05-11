import React from 'react'
import './Services.css'
import { NavLink } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
export default function Services() {

  return (
    <div className='image'>
    <div className='holehome'>
      Services Page
      <div className='three'>
        <button id='sale'>Sale</button>
        <button id='buy'>Buy</button>
        <button id='rental'>Rental</button>

      </div>
      
    <div className='contact'>
        <div className='quick-link'>
          <h2 style={{color:'white'}}>QuickLinks</h2>
          <NavLink to='/'className='quicklink-item'>Home</NavLink>
          <NavLink to='/About'className='quicklink-item'>Aboutus</NavLink>
          <NavLink to='/Services'className='quicklink-item'>Services</NavLink>
        </div>
        <div className='contact-details'>
        <h2 style={{color:'white'}}>ContactDetails</h2>
        <ul className='contact-items' style={{listStyle:'none'}}>
          <li style={{color:'white' }}><a className='contact-items'style={{textDecoration:'none',color:'white'}} href='#'>Callus: 123-456-789</a></li>
          <li style={{color:'white' }}><a className='contact-items'style={{textDecoration:'none',color:'white'}} href='#'>Email: X-Y-Z.com</a></li>
          <li style={{color:'white'}}>Address</li>
          <li style={{color:'white'}}>3/328</li>
          <li style={{color:'white'}}>LIC-tower</li>
          <li style={{color:'white'}}>chennai-600028</li>
        </ul>
        </div>
        <div className='socialmedia'>
            <h2 style={{color:'white' ,marginTop:0}}>Follow us</h2>
            <div className='icons'>
            <div  className='icons-item'><a href=''><FaFacebookSquare style={{height:'40px',width:'50px'}} /></a></div>
            <div  className='icons-item'><a href=''><RiTwitterXFill style={{height:'40px',width:'50px',color:'black'}}/></a></div>
            <div  className='icons-item'><a href=''><LuInstagram style={{height:'40px',width:'50px',color:'red'}}/></a></div>
            </div>
      </div>
    </div>
  </div>
  </div>

  )
}
