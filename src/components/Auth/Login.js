import React, { useState } from 'react'
import './Login.scss'
const Login = (props) => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const handleLogin=() =>{

        alert('submit')
    }
  return (
    <div className='login-container'>
      <div className='header mx-auto'>
        don't have an account yet?
        </div>
        <div className='title col-4 mx-auto'>
        Hanhdeptrainhatthegioi
        </div>
        <div className='welcom col-4 mx-auto'>
        Hello, who's this?
        </div>
        <div className='content-form col-4 mx-auto'>
            <div className='form-group'>
                <label>emaail</label>
                <input 
                type={"email"} 
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                className='form-control'></input>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input 
                type={"password"}
                value={password}
                onChange={(event)=>setPassword(event.target.value)} 
                className='form-control'></input>

            </div>
            <span className='forgot-password'>fogot password ?</span>
            <div>
                <button onClick={handleLogin()} className='btn-submit'>Login to Hanhdeptrai</button>
            </div>
        </div>
    </div>
  )
}

export default Login
