import React from 'react'
import { Link } from 'react-router-dom'

import './layout.css'

import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";


const Layout = () => {
  return (
    <>
      <header>
        <nav className='navbar'>
          <div className='search_div'>
            <input type='search' placeholder='Search...'/>
            <IoIosSearch />
          </div>
          <div className='website_logo'>
            <Link to="/">
              <h1>RetroZone</h1>
            </Link>
          </div>
          <div className='nav_links'>
            <Link to="/cart">
              <MdOutlineShoppingCart className='cart_icon' />
            </Link>
            <Link to="/signin">
              <LuUserRound className='login_icon'/>
            </Link>
          </div>
        </nav>
        <nav className='secondary_navbar'>
          <ul>
            <li><Link to="/all-products" className='secondary_navbar_Link'>All Furniture</Link></li>
            <li><Link to="/all-products" className='secondary_navbar_Link'>Living Room</Link></li>
            <li><Link to="/all-products" className='secondary_navbar_Link'>Bedroom</Link></li>
            <li><Link to="/all-products" className='secondary_navbar_Link'>Dining</Link></li>
            <li><Link to="/all-products" className='secondary_navbar_Link'>Office</Link></li>
            <li><Link to="/all-products" className='secondary_navbar_Link'>Outdoor</Link></li>
            <li><Link to="/all-products" className='secondary_navbar_Link'>Lighting</Link></li>
            <li><Link to="/all-products" className='secondary_navbar_Link'>Decor</Link></li>
            <li><Link to="/all-products" className='secondary_navbar_Link'>New Arrivals</Link></li>
            <li><Link to="/all-products" className='secondary_navbar_Link'>Sale</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Layout
