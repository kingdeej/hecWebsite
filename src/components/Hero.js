import React, { useEffect, useState } from 'react'
import ticketIcon from '../images/ticketIcon.svg'
import dateIcon1 from '../images/dateIcon1.svg'
import locationIcon1 from '../images/locationIcon1.svg'
import {Link} from 'react-router-dom'
import Events from './Events'

export default function Hero() {
  const [currentFlyer, setCurrentFlyer] = useState(0)
  const [events, setEvents] = useState([])

  function handleChangeflyer(e) {
    setCurrentFlyer(e)
    flyerAnimations()
  }
  const handleEventClick = () => { 
    // setredirect(true)
  }
  const getInfo = (e) => {
    Events ((e) => { setEvents(e) } )
}
  useEffect(() => {
    getInfo()
  }, [])

  const flyerAnimations = () => { 
    setInterval(() => {
      if (currentFlyer < events.length-1) {
        setCurrentFlyer(currentFlyer + 1)
      }
      if (currentFlyer >= events.length-1) {
        setCurrentFlyer(0)
      }
    }, 7000); 
   }
  

  
  return (
    <section className='hero | vertical-align'>
      <div className="hero-wrapper | page-inline-padding flex">
        <ul className="left-hero-wrapper | flex-carousel">
          {events?.map((x, key)=>{
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
                     <Link to={'/:' + x.eventId}><button onClick={handleEventClick} className="button | primary-button ">Get Tickets</button></Link>
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
              <Link to={'/:' + x.id}>
                <img onClick={handleEventClick} src={x.poster} alt="hero-img" className="hero-img" />
              </Link>
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
