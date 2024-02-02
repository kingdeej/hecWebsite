import React, { useEffect, useState } from 'react'
import ticketIcon from '../images/ticketIcon.svg'
import dateIcon1 from '../images/dateIcon1.svg'
import locationIcon1 from '../images/locationIcon1.svg'
import {Link} from 'react-router-dom'
import Events from './Events'
import Loading from './Loading'

export default function Hero() {
  const [currentFlyer, setCurrentFlyer] = useState(0)
  const [events, setEvents] = useState([])
  const heroNumber = 3

  function handleChangeflyer(e) {
    setCurrentFlyer(e)
    // flyerAnimations()
  }
  const handleEventClick = () => { 
    // setredirect(true)
  }
  const getInfo = (e) => {
    Events ((e) => { setEvents(e) } )
  }
  useEffect(() => {
    if (events?.length === 0) {
      getInfo()
    }
    const flyerAnimations = setInterval(() => {
      setCurrentFlyer(currentFlyer + 1)
      if (currentFlyer >= heroNumber-1) {
        setCurrentFlyer(0)
      }
    }, 5000);    


    return()=>{clearInterval(flyerAnimations)}
  }, [currentFlyer])
  
  
  return (
    <section className='hero'>
      <div className="hero-wrapper | container">
        <ul className="right-hero">
        {
          events.map((x,key)=>{
            const activeFlyer = key === currentFlyer ? 'active-flyer': 'inactive-flyer'
            if (x.featured === true) {
              return(
                <li key={key} datatype-flyer={activeFlyer}>
                  <Link to={'/' + x.id}>
                    <img onClick={handleEventClick} src={x.poster} alt="hero-img" className="hero-img mx-auto" />
                  </Link>
                </li>
              )
              
            }
          })
        }
          <div className='hero-img-cont'></div>
        </ul>
        <ul className="left-hero-wrapper text-center">
          {events?.length === 0 ? <Loading /> : 
            events?.map((x, key)=>{
              const activeFlyer = key === currentFlyer ? 'active-flyer': 'inactive-flyer'
              if (x.featured === true) {
                return(
                  <li key={key} datatype-flyer={activeFlyer} className="left-hero flow-4">
                    <p className='eyebrow'>Featured Events</p>
                    <h1 className="hero-header heading-line-style | primary-header | text-center">
                      {x.eventName}
                    </h1>
                    <div className='wrapper flex-jc-sb'>
                      <ul className="event-info-wrapper">
                        <li className='flex primary-paragraph'><img src={locationIcon1} alt="location" />{x.eventStreet}, {x.eventParish}</li>
                        <li className='flex primary-paragraph'><img src={dateIcon1} alt="date" />{x.eventDate}</li>
                      </ul>
                      <div className="hero-button-wrapper | flex">
                        <Link to={'/' + x.id}><button onClick={handleEventClick} className="button | primary-button ">Get Tickets</button></Link>
                        <div className="price-wrapper | flex"><img src={ticketIcon} alt="ticket" />
                        <p className='vertical-align'>${x.eventPrice}</p>
                        </div>
                      </div>
                    </div>
                    <p className='base-text'>Get exclusive tickets here and also purchase food and drinks.</p>
                  </li>
                )
              }
            })
          }
        </ul>
        <ul className="hero-flyer-buttons | flex">
          {events.map((x, key)=>{
            const activeFlyer = key === currentFlyer ? 'active-button': 'inactive-button'
            if (x.featured === true) {
              return(
                  <li onClick={() => {handleChangeflyer(key) }}  key={key} datatype-flyer={activeFlyer} className="button hero-flyer-button">
                  </li>
              )
              
            }
          })}
        </ul>
      </div>
    </section>
  )
}
