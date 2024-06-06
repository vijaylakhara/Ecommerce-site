import React from 'react'
import Hero from '../hero/Hero'
import './login.css'
const Login = () => {
  return (
    <div className='login'>
      <div className="login-page">
        <h2>Sign Up</h2>
        <input type="text" name="" id="" placeholder='Your Name' />
        <input type="email" name="" id="" placeholder='Email Address' />
        <input type="password" name="" id="" placeholder='Password' />
        <button>Continue</button>
        <div className="login-down-one">
          <p>Already have on account?</p><a href="/">Login here</a>
          </div>
          <div className='login-down-two'>
          <input type="radio" name="" id="" /><p>By continuing i agree to the trems of use & privacy policy</p>
        </div>

      </div>

    </div>
  )
}

export default Login
