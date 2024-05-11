import React, { useState } from 'react'
import axios from 'axios'
import './Admin.css'
export default function Admin() {
    const[name,setname]=useState()
    const[location,setlocation]=useState()
    const[price,setprice]=useState()
    const[type,settype]=useState()
    const[img,setimg]=useState()
    const[id,setid]=useState(1)
    const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(name,location,type)
     axios.post('http://localhost:3007/User',{name:name,location:location,price:price,img:img,type:type,status:'pending'})
    .then(res=>console.log(res.data))
  
    }
  return (
    <div>
        <div className='form-div'> 
      <form onSubmit={handleSubmit} className='form'>
        <label>Name:</label>
        <input onChange={(e)=>setname(e.target.value)} className='input-box' required></input><br></br>
        <label>location:</label>
        <input onChange={(e)=>setlocation(e.target.value)} className='input-box' required></input><br></br>
        <label>Price:</label>
        <input  type='number' onChange={(e)=>setprice(e.target.value)} className='input-box' required></input><br></br>
        <label>ImageLink:</label>
        <input  type='text' onChange={(e)=>setimg(e.target.value)} className='input-box' required></input><br></br>
        <lable>Type:</lable>
      <select onChange={(e)=>settype(e.target.value)} className='input-box' required>
        <option value=''>Select an option</option>
        <option value='Rental house'>Rental house</option>
        <option value='Duplex house'>Duplex house</option>
        <option value='Villas house'>Villas house</option>
        <option value='Bunglaow house'>Bunglaow house</option>
        <option value='Farm house'>Farm house</option>
        <option value='Eco-Friendly house'>Eco-Friendly house</option>
      </select><br></br>
      <button type="submit" className='button'>Submit</button>
      <button type="reset" className='button'>Reset</button>
      </form>
      </div>
    </div>
  )
}
