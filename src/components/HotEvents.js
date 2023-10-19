import React, { Component } from 'react'

export default class HotEvents extends Component {
  render() {
    return (
      <section className='hot-events'>
        <div className="hot-events-wrapper">
            <div className="hot-events-header">
                <h4>Hot Events</h4>
                <p>See all</p>
            </div>
            <ul className="flyers-wrapper">
                <li className="flyer">
                    <img src="" className='flyer-img' alt="flyer" />
                    <div className="flyer-info-cont">
                        <h4 className='flyer-header'>Jamaican Party</h4>
                        <ul className="event-info-wrapper">
                            <li><img src="" alt="location" />Ocho Rios</li>
                            <li><img src="" alt="date" />Sat July 25</li>
                        </ul>
                        <p><img src="" alt="ticket-img" />$500</p>
                        <button className="get-tickets-button">Get Tickets</button>
                    </div>
                </li>
            </ul>
        </div>
      </section>
    )
  }
}
