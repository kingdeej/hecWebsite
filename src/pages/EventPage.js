import React, { useEffect, useState } from 'react'
import ticketIcon from '../images/ticketIcon.svg'
import {AiOutlineInstagram, AiFillFacebook, AiOutlineWhatsApp,} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {FiCalendar} from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import Events from '../components/Events'
import ReactPlayer from 'react-player'
import Loading from '../components/Loading'
import PromoteCta from '../components/PromoteCta'


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
    <main className="event-page | bg-image">
       {eventInfo?.length === 0 ? <Loading /> : eventInfo?.map((event, key)=>{
        const location = `${event.streetAddress},${event.eventStreet},${event.eventParish},Jamaica`
        if (event?.id === eventId) {
            return (
                <div key={key} className="event-page-wrapper | container section">
                <div className="event-page-info-wrapper | bg-light-300 mg-block-end-5 pg-block-3 clr-dark-300">
                    <div className="left-wrapper">
                        <img src={event.poster} alt="event" className="event-image | mx-auto" />
                    </div>
                    <div className="right-wrapper | flex-column pg-2 flow-3 text-center">
                        <h2 className="primary-heading | heading-line-style text-center mx-auto">
                            {event.eventName}
                        </h2>
                        <div className="promoter-links-wrapper">
                            <h3 className="secondary-header | text-left">
                                Promoter Links
                            </h3>
                            <ul className="promoter-links flex-al-c">
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
                            <ul className="event-info-wrapper flow-0">
                                <li className='flex | gap-1'><ImLocation /> <a className='flex-wrap' href="#google-map-event">{event.placeName}{event.placeName ? ',': ''} {event.streetAddress}, {event.eventStreet}, {event.eventParish}</a> </li>
                                <li className='flex | gap-1'><FiCalendar />{event.eventDate}</li>
                            </ul>
                            <select className='mg-block-2 bg-dark-300 clr-light-300' name="quantity" id="quantity">
                                <option value="1">Quantity</option>
                            </select>
                        </div>
                        <div className='flex-column flow-2 button-wrapper'>
                            <p className='ticket-wrapper flex-center clr-accent-400'><img src={ticketIcon} alt="ticket-img" />${event.eventPrice}</p>
                            <button className="get-tickets-button | pg-block-1 button">Buy Ticket</button>
                        </div>
                    </div>
                </div>
                {/* if there is no video of photos found then don't show entertainment wrapper */}
                {event.photos || event.video ? 
                    <div className="entertainment-wrapper | section clr-dark-300">
                        <div className="entertainment | page-inline-padding flow-4">
                            <h2 className="secondary-header">
                                Videos and Images
                            </h2>
                            <div className='video-wrapper flex-center'>
                                {!event.video ? <div>No Media Yet</div>
                                    : 
                                <ReactPlayer className='react-player' controls={true} url={event.video}/>
                                }
                            </div>
                            <ul className='images-carousel | flex-jc-sb gap-3'>
                                {
                                photoArray.map((x, key)=>{
                                    console.log('event.photos');
                                    const photosArray = event?.photos ? event.photos : [0,0,0,0]
                                    return(
                                        <li className='flex-center' key={key}> {!photosArray[key] ? <p>No Image</p> : ''}<img src={photosArray[key]} alt="" /></li>
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
       <PromoteCta />
      </main>
  )
}
