import React from 'react'

export default function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo">
          <img src="" alt="Logo" />
        </div>
        <ul className="links">
          <li className="link"><a href="">All events</a></li>
          <li className="link"><a href="">Hot Events</a></li>
          <li className="link"><a href="">Top Locations</a></li>
          <li className="link"><a href="">Get Tickets</a></li>
          <li className="link"><a href="">About Us</a></li>
        </ul>
        <div className="right-nav">
          <button className="contact-button">Contact Us</button>
          <button className="search-button"><img src="" alt="search" /></button>
          <button className="profile-button"><img src="" alt="profile" /></button>
        </div>
      </div>
    </nav>
  )
}
