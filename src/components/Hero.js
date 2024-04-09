import React, { useEffect, useState, useMousePosition } from 'react'
import ticketIcon from '../images/ticketIcon.svg'
import dateIcon1 from '../images/dateIcon1.svg'
import locationIcon1 from '../images/locationIcon1.svg'
import {BiChevronRightCircle, BiChevronLeftCircle} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import Events from './Events'
import Loading from './Loading'
import IsSignedIn from './IsSignedIn'

export default function Hero() {
  const [currentFlyer, setCurrentFlyer] = useState(0)
  const [events, setEvents] = useState([])
  const [firstTouchPosition, setFirstTouchPosition] = useState(0)

  //the number of hero events to display
  const heroNumber = events?.length > 3 ? 3 : events?.length

  function handleChangeflyer(e) {
    setCurrentFlyer(e)
  }
  const handleEventClick = () => { 
  }
  const getInfo = (e) => {
    Events ((e) => { setEvents(e.filter(x=>x.featured) ) } )
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
    }, 7000);   


    return()=>{clearInterval(flyerAnimations)}
  }, [currentFlyer])

  const moveLeft = (e) => {
    handleChangeflyer(currentFlyer - 1)
    if (currentFlyer === 0) {
      handleChangeflyer(heroNumber - 1)
    }
  }
  const moveRight = (e) => { 
    handleChangeflyer(currentFlyer + 1)
    if (currentFlyer >= heroNumber-1) {
      setCurrentFlyer(0)
    }
   }

  const endTouch = (e) => { 
    const firstLat = firstTouchPosition[0].clientX/10
    const lastLat = e[0].clientX/10
    const swipeAmount = 10

    if (lastLat >= firstLat + swipeAmount) {
      moveLeft()
    }
    if (lastLat <= firstLat - swipeAmount) {
    moveRight()
    }
   }
  
  return (
    <section className='hero | flex-al-c vertical-align' onTouchStart={(e) => { setFirstTouchPosition(e.changedTouches); }} onTouchEnd={(e) => { endTouch(e.changedTouches); }} >
        <div id='left-button' className='hero-nav-button-wrapper  space-between '>
            <BiChevronLeftCircle onClick={moveLeft}  className='hero-nav-buttonr'/>
        </div>
        <div id='right-button' className='hero-nav-button-wrapper space-between '>
            <BiChevronRightCircle onClick={moveRight} className='hero-nav-button'/> 
        </div>
      <div className="hero-wrapper | container page-inline-padding flex gap-8">
        <ul className="left-hero-wrapper |">
          {events?.length === 0 ? <Loading /> : 
            events?.map((x, key)=>{
              const activeFlyer = key === currentFlyer ? 'active-flyer': 'inactive-flyer'
              if (x.featured === true) {
                return(
                  <li key={key} datatype-flyer={activeFlyer} className="left-hero | text-center    flow-4">
                    <p className='eyebrow '>Featured Events</p>
                    <h1 className="hero-heading heading-line-style | primary-header | text-center mg-block-start-0">
                      {x.eventName}
                    </h1>
                    <div className='wrapper flex-jc-c'>
                      <ul className="event-info-wrapper | text-left flow-1">
                        <li className='primary-paragraph | clr-light-500 flex gap-1'><img src={locationIcon1} alt="location" />{x.eventStreet}, {x.eventParish}</li>
                        <li className='primary-paragraph | clr-light-500 flex gap-1'><img src={dateIcon1} alt="date" />{x.eventDate}</li>
                      </ul>
                      <div className="hero-button-wrapper | flex-center wrap gap-2">
                        <Link to={'/' + x.id}><button onClick={handleEventClick} className="button | primary-button ">Get Tickets</button></Link>
                        <div className="price-wrapper | flex-center gap-0"><img src={ticketIcon} alt="ticket" />
                          <p className='vertical-align clr-accent-400'>${x.eventPrice}</p>
                        </div>
                      </div>
                    </div>
                    <p className='base-text | fs-200 clr-light-500'>Get exclusive tickets here and also purchase food and drinks.</p>
                  </li>
                )
              }
            })
          }
        </ul>
        <ul className="right-hero | flex-center">
          <div className='hero-img-cont bg-primary-300'>
        {
          events.map((x,key)=>{
            const activeFlyer = key === currentFlyer ? 'active-flyer': 'inactive-flyer'
            if (x.featured === true) {
              return(
                <li datatype-flyer={activeFlyer} key={key}>
                  <Link draggable="false" to={'/' + x.id}>
                    <img draggable="false" onClick={handleEventClick} src={x.poster} alt="hero-img" className="hero-img" />
                  </Link>
                </li>
              )
              
            }
          })
        }
        </div>
        </ul>
        <ul className="hero-flyer-buttons | flex-center gap-1">
          {events.map((x, key)=>{
            const activeFlyer = key === currentFlyer ? 'active-button': 'inactive-button'
            if (key < heroNumber) {
              if (x.featured === true) {
                return(
                    <li onClick={() => {handleChangeflyer(key) }}  key={key} datatype-flyer={activeFlyer} className="button hero-flyer-button"> </li>
                )
              }
              
            }
          })}
        </ul>
      </div>
    </section>
  )
}
