import React from 'react'
import { Link } from 'react-router-dom'

import './signin.css'


export const SignIn = () => {
  return (
    <section className='sigin_sect'>
      <div className='signin_container'>

        <div className='signin_div'>
          <form>
            <h2>Log In</h2>

            <div>
              <label>Email</label>
              <input type='mail'/>

              <label>Password</label>
              <input type='password'/>

              <p>Forgot your Password?</p>
              <button>log in</button>
            </div>

          </form>
        </div>

        <div className='sign_up_div'>
          <h1>Sign Up</h1>
          <p>Creating an account makes it easier to: checkout faster, view your order <br /> history, & access your order status</p>
          <Link to='/registration'>
            <button>sign up</button>
          </Link>
        </div>

      </div>
    </section>
  )
}
