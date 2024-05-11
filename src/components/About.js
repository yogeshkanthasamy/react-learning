import React from 'react'
import './AboutStyle.css'
import { NavLink } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
export default function Aboutus() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>AboutUs</h1>
      <div className='about'>
        <h2 className='header'>Buy, Sell and Rent Properties in India</h2>
        <p className='para'>Welcome to xyz.com. We have been serving the needs of the 
          real estate industry in India since 2007. Our single platform is designed to meet the needs of buyers, 
          sellers and brokers of India properties. Our success is attributed to our understanding of the needs of our customers and
           consistently working to meet those needs utilizing innovative e-commerce solutions. If you are interested in purchasing a home or locate a
            rental property, you can search India properties using our portal to find the right residential property or commercial property to fit your
             needs. Search India properties in our enormous database by the type of property, the location and other attributes to quickly locate 
             properties that meet your exact specifications. Do you have a commercial property or residential property to sell or rent? You can list
              your rental property or real estate on our website. Our real estate portal is structured to provide wider exposure, so your
            property will be seen by as many buyers as possible for a fast response to your listing. There is no charge for listing your
            property, just register with us and enter details and images 
          of your property to get started.</p>
        <h2 className='header'>High Response Rate</h2>
        <p className='para'>We pick sellers for you who give you priority. Over 90% of our top sellers respond to enquiries within the first 24 hours!</p>
        <h2 className='header'>Wide Coverage</h2>
        <p className='para'>Sellers with a wide variety of properties are more likely to satisfy your demands. More the options, better is your decision.</p>
        <h2 className='header'>Deals Closed</h2>
        <p className='para'>We choose sellers who have previously closed deals with similar requirement as you have. They'll understand your needs better.</p>
        <h2 className='header'>Rated & Reviewed</h2>
        <p className='para'>Testimonials from genuine buyers are the best way to judge a seller. Better the ratings, better will be your experience.</p>
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
  )
}
