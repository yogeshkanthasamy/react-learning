import React, { useState } from 'react'
 export const auth=React.createContext()
export default function Auth(props) {
    const[username,setusername]=useState()
const login=(name)=>{
    setusername(name)
}
const logout=()=>{
    setusername('')
}
  return (
  
    <div>
      <auth.Provider >
        {props.children}
      </auth.Provider>
    </div>
  )
}
