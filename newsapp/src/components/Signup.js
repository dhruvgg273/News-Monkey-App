import React, { Component, useState } from 'react'

function Signup() {
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('');
  const register = async (ev) => {
    ev.preventDefualt();
    await fetch('http://localhost:3000',{
      method :'POST',
      body:JSON.stringify({username,password}),
      Headers:{' Content-Type' :'application.json'},
    })
    }
  return (
    <div>
       <div className="container my-6" >
      <form action='' onSubmit={register}>
        <h1>SIGNUP</h1>
        <input type='text' placeholder='username' value={username} onChange={ev=> setusername(ev.target.value)}></input>
        <input type='password' placeholder='password' value={password} onChange={ev=>setpassword(ev.target.value)}></input>
        <div className="container my-4">
        <button type="button" className="btn btn-secondary">SIGNUP</button>
        </div>
      </form>
     </div>
    </div>
  )
}

export default Signup