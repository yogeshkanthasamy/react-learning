import axios from 'axios'
import React from 'react'

export default function api() {
    axios.get("http://localhost:3002/user")
    .then(res=>console.log(res.data))
  return (
    <div> 

    </div>
  )
}
