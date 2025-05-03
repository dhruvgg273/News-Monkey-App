import React from 'react'

export default function Login() {
  return (
    <div className="container my-6">
      <form action=''>
        <input type='text' placeholder='username'></input>
        <input type='password' placeholder='password'></input>
        <div className="container my-4">
        <button type="button" class="btn btn-secondary">LOGIN</button>
        </div>
      </form>
    </div>
  )
}
