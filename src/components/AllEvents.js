import React, { Component } from 'react'
import dateIcon from '../images/dateIcon.svg'
import locationIcon from '../images/locationIcon.svg'
import ticketIcon from '../images/ticketIcon.svg'
import {Link} from 'react-router-dom'
import Events from './Events'

export default class HotEvents extends Component {
  state={
    redirect: false,
    events: [],
  }
  
  getEvents = (e)=>{
    this.setState({events: e})
  }
  getImageList = (e)=>{
    this.setState({images: e})
  }

  componentDidMount(){
    Events((e) => { this.getEvents(e) } )
  }
  render() {
    return (
      <section className= {`${this.props.eventStyle} hot-events | page-block-padding`}>
        <div className="hot-events-wrapper | page-inline-padding">
            <div className="hot-events-header | space-between">
                <h4 className='secondary-header'>{this.props.FlyersType} Events</h4>
                <a href='/events-page' className='primary-paragraph'>See all</a>
            </div>
            <ul className="flyers-wrapper | flex">
              {this.state.events?.map((x, key)=>{
                if (key < this.props.eventAmount) {
                  return(
                    <li key={key} className="flyer | flex-column">
                        <Link to={'/' + x.id}><img src={x.poster} className='flyer-img' alt="flyer" /></Link>
                        <div className="flyer-info-cont | flex-center">
                            <h4 className='flyer-header | heading-line-style'>{x.eventName}</h4>
                            <ul className="event-info-wrapper">
                                <li className='flex'><img src={locationIcon} alt="location" />{x.eventStreet}, {x.eventParish}</li>
                                <li className='flex'><img src={dateIcon} alt="date" />{x.eventDate}</li>
                            </ul>
                            <div className='tickets-wrapper'>
                              <p className='ticket-price flex-center'><img src={ticketIcon} alt="ticket-img" />${x.eventPrice}</p>
                              <Link className="get-tickets-button | button" to={'/' + x.id}><button className='button get-tickets-button'  >Get Tickets</button></Link>
                            </div>
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
