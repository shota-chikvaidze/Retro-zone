import React from 'react'
import { Link } from 'react-router-dom'
import './layout.css'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer_container'>
            <div className='footer_left_side'>
                <div className='website_logo_footer'>
                  <Link to="/">
                    <h1>RetroZone</h1>
                  </Link>
                </div>
                <p>Lorem ipsum dolor sit.</p>
                <div className='footer_icon_div'>
                    <FaFacebook className='footer_icon' />
                    <FaInstagram className='footer_icon' />
                    <FaTwitter className='footer_icon' />
                    <FaYoutube className='footer_icon' />
                </div>
            </div>
            <div className='footer_right_side'>

                <ul>
                    <li><span>Product</span></li>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Customer stories</li>
                    <li>Security</li>
                </ul>

                <ul>
                    <li><span>Resources</span></li>
                    <li>Blog</li>
                    <li>Guides & tutorials</li>
                    <li>Help center</li>
                    <li>What's new</li>
                </ul>

                <ul>
                    <li><span>Templates</span></li>
                    <li>Landing</li>
                    <li>Dashboard</li>
                    <li>Log In and Sign Up</li>
                    <li>Payement</li>
                </ul>

                <ul>
                    <li><span>Company</span></li>
                    <li>About Us</li>
                    <li>Media kit</li>
                    <li>Contact Support</li>
                </ul>

            </div>
        </div>
        <div className='copyright_text'>
            <h5>Copyright@2022. All rights reserved</h5>
        </div>
      </footer>
    </>
  )
}

export default Footer
