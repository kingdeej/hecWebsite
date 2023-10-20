import React from 'react'
import logo from '../images/logo.svg'
import searchIcon from '../images/searchIcon.svg'
import profileIcon from '../images/profileIcon.svg'

export default function Nav() {
  return (
    <nav className='nav | '>
      <div className="nav-wrapper | space-between page-inline-padding">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links | flex">
          <li className="link"><a href="/#">All events</a></li>
          <li className="link"><a href="/#">Hot Events</a></li>
          <li className="link"><a href="/#">Top Locations</a></li>
          <li className="link"><a href="/#">Get Tickets</a></li>
          <li className="link"><a href="/#">About Us</a></li>
        </ul>
        <div className="right-nav | vertical-align">
          <button className="button | secondary-button">Contact Us</button>
          <button className="button | icon-button"><img src={searchIcon} alt="search" /></button>
          <button className="button | icon-button"><img src={profileIcon} alt="profile" /></button>
        </div>
      </div>
    </nav>
  )
}
