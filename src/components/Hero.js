import React from 'react'
import ticketIcon from '../images/ticketIcon.svg'
import dateIcon1 from '../images/dateIcon1.svg'
import locationIcon1 from '../images/locationIcon1.svg'
import flyImg1 from '../images/flyImg1.jpg'

export default function Hero() {
  return (
    <section className='hero'>
      <div className="hero-wrapper | page-inline-padding flex">
        <div className="left-hero">
          <span className='eyebrow'>Featured Events</span>
          <h1 className="hero-header | primary-header">
            Pelican Party
          </h1>
          <ul className="event-info-wrapper">
            <li className='flex'><img src={locationIcon1} alt="location" />Ocho Rios</li>
            <li className='flex'><img src={dateIcon1} alt="date" />Sat July 25</li>
          </ul>
          <div className="hero-button-wrapper">
            <button className="button | primary-button">Get Tickets</button>
            <div className="price-wrapper"><img src={ticketIcon} alt="ticket" /></div>
            $500
          </div>
          <p>Get exclusive tickets here and also purchase food and drinks.</p>
        </div>
        <div className="right-hero">
          <div className="hero-img-cont">
            <img src={flyImg1} alt="hero-img" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
