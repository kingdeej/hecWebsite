import React, { Component } from 'react'
import flyImg1 from '../images/flyImg1.jpg'
import flyImg2 from '../images/flyImg1.jpg'
import dateIcon from '../images/dateIcon.svg'
import locationIcon from '../images/locationIcon.svg'
import ticketIcon from '../images/ticketIcon.svg'

export default class HotEvents extends Component {
  events = [
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
    {
      eventId: 2,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 3,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 4,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 5,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 6,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 7,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },

  ]
  render() {
    return (
      <section className= {`${this.props.eventStyle} hot-events | page-block-padding`}>
        <div className="hot-events-wrapper | page-inline-padding">
            <div className="hot-events-header | space-between">
                <h4 className='secondary-header'>{this.props.FlyersType} Events</h4>
                <a href='/eventspage' className='primary-paragraph'>See all</a>
            </div>
            <ul className="flyers-wrapper | flex">
              {this.events.map((x, key)=>{
                if (key < this.props.eventAmount) {
                  return(
                    <li key={key} className="flyer">
                        <img src={x.eventImg} className='flyer-img' alt="flyer" />
                        <div className="flyer-info-cont | flex-center">
                            <h4 className='flyer-header | heading-line-style'>{x.eventName}</h4>
                            <ul className="event-info-wrapper">
                                <li className='flex'><img src={locationIcon} alt="location" />{x.eventLocation}</li>
                                <li className='flex'><img src={dateIcon} alt="date" />{x.eventDate}</li>
                            </ul>
                            <p className='ticket-wrapper flex-center'><img src={ticketIcon} alt="ticket-img" />${x.eventPrice}</p>
                            <button className="get-tickets-button | button">Get Tickets</button>
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
