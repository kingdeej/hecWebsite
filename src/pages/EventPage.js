import React, { Component } from 'react'
import flyImg1 from '../images/flyImg1.jpg'
import ticketIcon from '../images/ticketIcon.svg'
import {AiOutlineInstagram, AiFillFacebook, AiOutlineWhatsApp,} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {FiCalendar} from 'react-icons/fi'

export class EventPage extends Component {
  render() {
    return (
      <main className="event-page">
        <div className="event-page-wrapper | page-block-padding">
            <div className="event-page-info-wrapper | page-inline-padding flex">
                <div className="left-wrapper flex-center">
                    <img src={flyImg1} alt="event" className="event-image" />
                </div>
                <div className="right-wrapper | flex-column space-between">
                    <h2 className="primary-header | heading-line-style">
                        Jamaican Party
                    </h2>
                    <div className="promoter-links-wrapper">
                        <h3 className="secondary-header">
                            Promoter Links
                        </h3>
                        <ul className="promoter-links flex">
                            <li>
                                <div className="social-links-wrapper">
                                    <ul className="social-links flex">
                                        <li><AiOutlineInstagram /></li>
                                        <li><AiFillFacebook /></li>
                                        <li><AiOutlineWhatsApp /></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="tel:+8505555555">850-555-5555</a></li>
                            <li><p>promoter@email.com</p></li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className="event-info-wrapper">
                            <li className='flex'><ImLocation />{'x.eventLocation'}</li>
                            <li className='flex'><FiCalendar />{'x.eventDate'}</li>
                        </ul>
                        <select name="quantity" id="quantity">
                            <option value="1">Quantity</option>
                        </select>
                    </div>
                    <div className='flex-column button-wrapper'>
                        <p className='ticket-wrapper flex-center'><img src={ticketIcon} alt="ticket-img" />$500</p>
                        <button className="get-tickets-button | button">Buy Ticket</button>
                    </div>
                </div>
            </div>
            <div className="entertainment-wrapper | page-block-padding">
                <div className="entertainment | page-inline-padding">
                <h2 className="secondary-header">
                    Videos and Images
                </h2>
                    <div className='video-wrapper'>
                        <video  src=''></video>
                    </div>
                    <ul className='images-carousel | flex'>
                        <li><img src="" alt="event" /></li>
                        <li><img src="" alt="event" /></li>
                        <li><img src="" alt="event" /></li>
                        <li><img src="" alt="event" /></li>
                    </ul>
                </div>
            </div>
        </div>
      </main>
    )
  }
}

export default EventPage