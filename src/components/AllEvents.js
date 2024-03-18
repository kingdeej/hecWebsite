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
      <section className= {`${this.props.eventStyle} hot-events | bg-image pg-block-13`}>
        <div className="hot-events-wrapper | page-inline-padding container ">
            <div className="hot-events-header | flex-jc-sb">
                <h4 className='secondary-heading clr-dark-400'>{this.props.FlyersType} Events</h4>
                <a href='/events-page' className='primary-paragraph'>See all</a>
            </div>
            <ul className="flyers-wrapper | flex gap-2">
              {this.state.events?.map((x, key)=>{
                if (key < this.props.eventAmount) {
                  return(
                    <li key={key} className="flyer | flex-column | clr-dark-300">
                        <Link to={'/' + x.id}><img src={x.poster} className='flyer-img' alt="flyer" /></Link>
                        <div className="flyer-info-cont |  bg-light-300 flow-2 pg-1">
                            <h4 className='flyer-header | heading-line-style mx-auto'>{x.eventName}</h4>
                            <ul className="event-info-wrapper">
                                <li className='flex gap-0'><img src={locationIcon} alt="location" /><p>{x.eventStreet}, {x.eventParish}</p></li>
                                <li className='flex gap-0'><img src={dateIcon} alt="date" /><p>{x.eventDate}</p></li>
                            </ul>
                            <div className='tickets-wrapper'>
                              <p className='ticket-price flex-center  | mg-block-end-1 clr-accent-400'><img src={ticketIcon} alt="ticket-img" />${x.eventPrice}</p>
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
