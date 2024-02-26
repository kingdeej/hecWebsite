import React, { useEffect, useState } from 'react'
import ticketIcon from '../images/ticketIcon.svg'
import {AiOutlineInstagram, AiFillFacebook, AiOutlineWhatsApp,} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {FiCalendar} from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import Events from '../components/Events'
import ReactPlayer from 'react-player'
import Loading from '../components/Loading'


export default function EventPage() {
    const [eventInfo, setEventInfo] = useState([])
    const [photoArray] = useState(Array(4).fill(0))
    let { eventId } = useParams()
    const getInfo = (e) => {
        Events((e) => { setEventInfo(e) } )
    }

    useEffect(() => {
        window.scrollTo(0, 0) 
        getInfo()
    }, [])
    
      
  return (
    <main className="event-page">
       {eventInfo?.length === 0 ? <Loading /> : eventInfo?.map((event, key)=>{
        const location = `${event.streetAddress},${event.eventStreet},${event.eventParish},Jamaica`
        if (event?.id === eventId) {
            return (
                <div key={key} className="event-page-wrapper | page-block-padding">
                <div className="event-page-info-wrapper | page-inline-padding flex">
                    <div className="left-wrapper flex-center">
                        <img src={event.poster} alt="event" className="event-image" />
                    </div>
                    <div className="right-wrapper | flex-column space-between">
                        <h2 className="primary-header | heading-line-style">
                            {event.eventName}
                        </h2>
                        <div className="promoter-links-wrapper">
                            <h3 className="secondary-header">
                                Promoter Links
                            </h3>
                            <ul className="promoter-links flex">
                                <li>
                                    <div className="social-links-wrapper">
                                        <ul className="social-links flex">
                                            <li><a href="http://instagram.com"><AiOutlineInstagram /></a></li>
                                            <li><a href="http://facebook.com"><AiFillFacebook /></a></li>
                                            <li><a href="http://whatsapp.com"><AiOutlineWhatsApp /></a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href={`tel:+${event.promoterNumber}`}>{event.promoterNumber}</a></li>
                                <li><p>{event.promoterEmail}</p></li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul className="event-info-wrapper">
                                <li className='flex'><ImLocation /> <a href="#google-map-event">{event.placeName}{event.placeName ? ',': ''} {event.streetAddress}, {event.eventStreet}, {event.eventParish}</a> </li>
                                <li className='flex'><FiCalendar />{event.eventDate}</li>
                            </ul>
                            <select name="quantity" id="quantity">
                                <option value="1">Quantity</option>
                            </select>
                        </div>
                        <div className='flex-column button-wrapper'>
                            <p className='ticket-wrapper flex-center'><img src={ticketIcon} alt="ticket-img" />${event.eventPrice}</p>
                            <button className="get-tickets-button | button">Buy Ticket</button>
                        </div>
                    </div>
                </div>
                {/* if there is no video of photos found then don't show entertainment wrapper */}
                {event.photos || event.video ? 
                    <div className="entertainment-wrapper | page-block-padding">
                        <div className="entertainment | page-inline-padding">
                            <h2 className="secondary-header">
                                Videos and Images
                            </h2>
                            <div className='video-wrapper'>
                                {!event.video ? <div>No Media Yet</div>: ''}
                                <ReactPlayer className='react-player' controls={true} url={event.video}/>
                            </div>
                            <ul className='images-carousel | flex'>
                                {
                                photoArray.map((x, key)=>{
                                    return(
                                        <li className='flex-center' key={key}> {!event.photos ? <p>No Image</p> : ''}<img src={event.photos} alt="" /></li>
                                    )
                                })
                                    
                                }
                            </ul>
                        </div>
                    </div> 
                    : '' 
                }

                <div id='google-map-event' className='google-map-event | page-block-padding page-inline-padding'>
                    <iframe
                    width="100%"
                    height="450"
                    style={{border:"0"}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBDtxL86RCBORJRuX2snPFvGBCVtSXwYlk
                        &q=${location}`}>
                </iframe>
                </div>                         
            </div>
            )
            
        }
       })}
      </main>
  )
}
