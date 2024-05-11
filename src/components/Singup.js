import React, { useState } from 'react'
import './Style.css'
 import axios from 'axios';
export default function Singup() {
  const[name,setname]=useState()
  const[username,setusername]=useState()
  const[email,setemail]=useState()
  const[pass,setpass]=useState()
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/User',{name:name,username:username,email:email,password:pass})
  .then(res=>{console.log(res.data)})
  .catch(err=>{console.log(err)})
    }

  return (
    <div>
      <form onSubmit={handlesubmit}>
      <label> Name:</label>
        <input type='text' className='input-box'required onChange={(e)=>setname(e.target.value)}></input><br></br>
        <label> Username:</label>
        <input type='text' className='input-box'required onChange={(e)=>setusername(e.target.value)}></input><br></br>
        <label > Emailid:</label>
        <input type='text'className='input-box'required onChange={(e)=>setemail(e.target.value)}></input><br></br>
        <label>Password:</label>
        <input type='text'className='input-box'required onChange={(e)=>setpass(e.target.value)}></input><br></br>
        <button type='submit'>Signup</button>
        <button type='reset'> Reset</button>
      </form>
    </div>
  )
}
