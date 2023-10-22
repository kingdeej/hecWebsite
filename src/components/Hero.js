import React from 'react'
import ticketIcon from '../images/ticketIcon.svg'
import dateIcon1 from '../images/dateIcon1.svg'
import locationIcon1 from '../images/locationIcon1.svg'
import flyImg1 from '../images/flyImg1.jpg'

export default function Hero() {
  return (
    <section className='hero | vertical-align'>
      <div className="hero-wrapper | page-inline-padding flex">
        <div className="left-hero | flex-column">
          <span className='eyebrow'>Featured Events</span>
          <h1 className="hero-header heading-line-style | primary-header">
            Pelican Party
          </h1>
          <div className='wrapper flex-direction-col'>
            <ul className="event-info-wrapper">
              <li className='flex primary-paragraph'><img src={locationIcon1} alt="location" />Ocho Rios</li>
              <li className='flex primary-paragraph'><img src={dateIcon1} alt="date" />Sat July 25</li>
            </ul>
            <div className="hero-button-wrapper | vertical-align">
              <button className="button | primary-button ">Get Tickets</button>
              <div className="price-wrapper | flex"><img src={ticketIcon} alt="ticket" />
              <p className='vertical-align'>$500</p>
              </div>
            </div>
          </div>
          <p className='base-text'>Get exclusive tickets here and also purchase food and drinks.</p>
        </div>
        <div className="right-hero">
          <img src={flyImg1} alt="hero-img" className="hero-img" />
          <div className='hero-img-cont'></div>
        </div>
      </div>
    </section>
  )
}
