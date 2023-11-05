import React, { useEffect, useState } from 'react'
import ticketIcon from '../images/ticketIcon.svg'
import {AiOutlineInstagram, AiFillFacebook, AiOutlineWhatsApp,} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {FiCalendar} from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import Events from '../components/Events'


export default function EventPage() {
    const [eventInfo, setEventInfo] = useState([])
    let { eventId } = useParams()
    const id = parseInt(eventId[1])
    const getInfo = (e) => {
        Events((e) => { setEventInfo(e) } )
    }

    useEffect(() => {
        window.scrollTo(0, 0) 
        getInfo()
        // const getInfo = eventInfo?.filter((x)=>x.eventId === id)
        // setEventInfo(getInfo[0])
    }, [])
    
    
  return (
    <main className="event-page">
       { eventInfo.map((event, key)=>{
        console.log(event.photos);
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
                            <li><a href="tel:+8505555555">850-555-5555</a></li>
                            <li><p>promoter@email.com</p></li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className="event-info-wrapper">
                            <li className='flex'><ImLocation />{event.eventLocation}</li>
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
            <div className="entertainment-wrapper | page-block-padding">
                <div className="entertainment | page-inline-padding">
                <h2 className="secondary-header">
                    Videos and Images
                </h2>
                    <div className='video-wrapper'>
                        <video  src=''></video>
                    </div>
                    <ul className='images-carousel | flex'>
                        {event.photos.map((photo, photoKey)=>{
                            console.log(photo);
                            return(
                                <li key={photoKey}><img src={photo} alt="event" /></li>

                            )
                            })}
                    </ul>
                </div>
            </div>                           
        </div>
        )
       })}
        
      </main>
  )
}


// export class EventPage extends Component {
//     state = {
//         eventInfo:{}
//     }
//     componentDidMount(){
//         const eventId = window.location.pathname.split('/')[3]
//         const getInfo = events.filter((x)=>x.eventId === 0)
//         this.setState({eventInfo: getInfo[0]})
//         console.log(eventId);
//     }
//   render() {
//     return (
      
//     )
//   }
// }

// export default EventPage