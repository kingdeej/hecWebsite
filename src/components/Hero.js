import React, { useState } from 'react'
import ticketIcon from '../images/ticketIcon.svg'
import dateIcon1 from '../images/dateIcon1.svg'
import locationIcon1 from '../images/locationIcon1.svg'
import flyImg1 from '../images/flyImg1.jpg'
import flyImg2 from '../images/flyImg2.jpg'

export default function Hero() {

  const [currentFlyer, setCurrentFlyer] = useState(0)
  const events = [
    {
      eventId: 0,
      eventImg: flyImg1,
      eventName: 'Jamaican Party',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 1,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },

  ]
  function handleChangeflyer(e) {
    setCurrentFlyer(e)
  }
  
  return (
    <section className='hero | vertical-align'>
      <div className="hero-wrapper | page-inline-padding flex">
        <ul className="left-hero-wrapper | flex-carousel">
          {events.map((x, key)=>{
            const activeFlyer = key === currentFlyer ? 'active-flyer': 'inactive-flyer'

            return(
              <li key={key} className={`${activeFlyer} left-hero | flex-column`}>
                <span className='eyebrow'>Featured Events</span>
                <h1 className="hero-header heading-line-style | primary-header">
                  {x.eventName}
                </h1>
                <div className='wrapper flex-direction-col'>
                  <ul className="event-info-wrapper">
                    <li className='flex primary-paragraph'><img src={locationIcon1} alt="location" />{x.eventLocation}</li>
                    <li className='flex primary-paragraph'><img src={dateIcon1} alt="date" />{x.eventDate}</li>
                  </ul>
                  <div className="hero-button-wrapper | vertical-align">
                    <button className="button | primary-button ">Get Tickets</button>
                    <div className="price-wrapper | flex"><img src={ticketIcon} alt="ticket" />
                    <p className='vertical-align'>${x.eventPrice}</p>
                    </div>
                  </div>
                </div>
                <p className='base-text'>Get exclusive tickets here and also purchase food and drinks.</p>
              </li>
            )
          })}
        </ul>
        <ul className="right-hero | flex-carousel">
        {events.map((x,key)=>{
          const activeFlyer = key === currentFlyer ? 'active-flyer': 'inactive-flyer'
          return(
            <li key={key} className={activeFlyer}>
              <img src={x.eventImg} alt="hero-img" className="hero-img" />
            </li>
          )
        })}
          <div className='hero-img-cont'></div>
        </ul>
        <ul className="hero-flyer-buttons | flex">
          {events.map((x, key)=>{
            const activeFlyer = key === currentFlyer ? 'active-button': 'inactive-button'
            return(
              <li onClick={() => {handleChangeflyer(key) }}  key={key} className={`${activeFlyer} button hero-flyer-button`}>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
