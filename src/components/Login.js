import React from 'react'
import './Style.css'
export default function Login() {
  return (
    <div>
        <form>
      <lable>Enter Username:</lable>
      <input type='text' required className='input-box'></input><br></br>
      <lable>Enter Password:</lable>
      <input type='text' required className='input-box'></input><br></br>
      <button type='submit'>Login</button>
      </form>
    </div>

  )
}
