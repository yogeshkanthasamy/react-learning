import React, { useContext } from 'react'
import { auth } from './Auth'

export default function Home() {
  const value=useContext(auth)
  return (
    <div>
      {value}
  
    </div>
  )
}
