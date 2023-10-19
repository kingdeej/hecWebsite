import React from 'react'

export default function Hero() {
  return (
    <section className='hero'>
      <div className="hero-wrapper">
        <div className="left-hero">
          <p>Featured Events</p>
          <h1 className="hero-header">
            Pelican Party
          </h1>
          <ul className="event-info-wrapper">
            <li><img src="" alt="location" />Ocho Rios</li>
            <li><img src="" alt="date" />Sat July 25</li>
          </ul>
          <div className="hero-button-wrapper">
            <button className="get-tickets-button">Get Tickets</button>
            <div className="price-wrapper"><img src="" alt="ticket" /></div>
            $500
          </div>
          <p>Get exclusive tickets here and also purchase food and drinks.</p>
        </div>
        <div className="right-hero">
          <div className="hero-img-cont">
            <img src="" alt="hero-img" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
