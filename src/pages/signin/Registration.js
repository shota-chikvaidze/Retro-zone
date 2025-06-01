import React from 'react'
import { Link } from 'react-router-dom'

import './signin.css'

export const Registration = () => {
  return (
    <section className='registration_section'>
      <div className='registration_container'>
        <form className='registration_form'>
          <h2>Sign Up</h2>

          <div className='input_container'>
            <label>First Name</label>
            <input type='text' required/>

            <label>Last Name</label>
            <input type='text' required/>

            <label>Email</label>
            <input type='mail' required/>

            <label>Password</label>
            <input type='password' required/>

          </div>

          <div className='registration_paragraph'>
            <input type='checkbox' id='checkbox'/>
            <label for='checkbox'>Keep me up to date on news and exclusive offers via email</label>
          </div>

          <div className='signUp_btn'>
            <button>Sign up</button>
          </div>

          <div className='already_have_acc'>
              <p>
                Already have an account?  
                <Link to='/signin'> <span className='logIn_span'>Log in</span> </Link>  
              </p>
          </div>


        </form>
      </div>
    </section>
  )
}
