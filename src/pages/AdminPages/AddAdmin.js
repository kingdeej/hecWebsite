import React from 'react'

export default function AddAdmin() {
  return (
<form className='add-event-page | page-block-padding'>
      <div className="add-event-page-wrapper | page-inline-padding">
        <h1 className="primary-header">
          Admin
        </h1>
        <div className="add-event-wrapper">
          <div className="add-event | flex-column">
            <input required placeholder='Event Name' type="text" name="event-name" id="eventName" />
            <input required placeholder='Event Price' type="text" name="event-Price" id="eventPrice" />
            <div className="location-wrapper">
              <input required placeholder='Event Street' type="text" name="event-Street" id="eventStreet" />
              <input required placeholder='Event Parish' type="text" name="event-Parish" id="Parish" />
            </div>
            <input required type="date" name="event-Date" id="eventDate" />
            <input required placeholder='Event Image' type="image" name="event-image" id="eventImage" />
          </div>
          <div className="add-promoter-wrapper">
            <div className="add-promoter">
              <input required placeholder='Promoter Name' type="text" name="promoter-Name" id="promoterName" />
              <input placeholder='Promoter Instagram Link' type="text" name="promoter-Instagram" id="promoterInstagram" />
              <input placeholder='Promoter Whatsapp Link' type="text" name="promoter-Whatsapp" id="promoterWhatsapp" />
              <input placeholder='Promoter Facebook Link' type="text" name="promoter-Facebook" id="promoterFacebook" />
            </div>
          </div>
          <button className="button get-tickets-button">Submit Event</button>
        </div>
      </div>
    </form>
  )
}
