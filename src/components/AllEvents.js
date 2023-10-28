import React, { Component } from 'react'
import dateIcon from '../images/dateIcon.svg'
import locationIcon from '../images/locationIcon.svg'
import ticketIcon from '../images/ticketIcon.svg'
import events from '../components/Events'
import {Link} from 'react-router-dom'

export default class HotEvents extends Component {
  state={
    redirect: false
  }
  render() {
    return (
      <section className= {`${this.props.eventStyle} hot-events | page-block-padding`}>
        <div className="hot-events-wrapper | page-inline-padding">
            <div className="hot-events-header | space-between">
                <h4 className='secondary-header'>{this.props.FlyersType} Events</h4>
                <a href='/eventspage' className='primary-paragraph'>See all</a>
            </div>
            <ul className="flyers-wrapper | flex">
              {events.map((x, key)=>{
                if (key < this.props.eventAmount) {
                  return(
                    <li key={key} className="flyer">
                        <Link to={'/:' + x.eventId}><img src={x.eventImg} className='flyer-img' alt="flyer" /></Link>
                        <div className="flyer-info-cont | flex-center">
                            <h4 className='flyer-header | heading-line-style'>{x.eventName}</h4>
                            <ul className="event-info-wrapper">
                                <li className='flex'><img src={locationIcon} alt="location" />{x.eventLocation}</li>
                                <li className='flex'><img src={dateIcon} alt="date" />{x.eventDate}</li>
                            </ul>
                            <p className='ticket-wrapper flex-center'><img src={ticketIcon} alt="ticket-img" />${x.eventPrice}</p>
                            <Link className="get-tickets-button | button" to={'/:' + x.eventId}><button className='button get-tickets-button'  >Get Tickets</button></Link>
                        </div>
                    </li>
                  )
                }
              })}
            </ul>
        </div>
      </section>
    )
  }
}
