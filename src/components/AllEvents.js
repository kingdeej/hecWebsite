import React, { Component } from 'react'
import dateIcon from '../images/dateIcon.svg'
import locationIcon from '../images/locationIcon.svg'
import ticketIcon from '../images/ticketIcon.svg'
import events from '../components/Events'
import {Navigate} from 'react-router-dom'

export default class HotEvents extends Component {
  state={
    redirect: false
  }
  handleEventClick = () => { 
    this.setState({redirect: true})
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
                       {this.state.redirect && <Navigate to={`/eventId/:${x.eventId}`} />}
                        <img onClick={this.handleEventClick} src={x.eventImg} className='flyer-img' alt="flyer" />
                        <div className="flyer-info-cont | flex-center">
                            <h4 className='flyer-header | heading-line-style'>{x.eventName}</h4>
                            <ul className="event-info-wrapper">
                                <li className='flex'><img src={locationIcon} alt="location" />{x.eventLocation}</li>
                                <li className='flex'><img src={dateIcon} alt="date" />{x.eventDate}</li>
                            </ul>
                            <p className='ticket-wrapper flex-center'><img src={ticketIcon} alt="ticket-img" />${x.eventPrice}</p>
                            <button onClick={this.handleEventClick} className="get-tickets-button | button">Get Tickets</button>
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
