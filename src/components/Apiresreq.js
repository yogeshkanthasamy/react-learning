import axios from 'axios'
import React, { useState } from 'react'

export default function Apiresreq() {
    const[list,setlist]=useState([])
    axios.get("http://localhost:3002/user")
    .then(res=>setlist(res.data.user))
  return (
    <div>
      <h1>hi buddy</h1>
     {/* {list.map((e)=>{
        <h1>{e.name}</h1>
     })} */}
     {list}
    </div>
  )
}
