import React, { Component } from 'react'
import searchIcon from '../images/searchIcon1.svg'
import AllEvents from '../components/AllEvents'
import PromoteCta from '../components/PromoteCta'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

export class EventsPage extends Component {
    render() {
    return (
      <main className='events-page '>
        <div className="events-page-wrapper | section ">
            <div className="filter-wrapper | pg-block-2 pg-inline-end-2 container bg-light-400">
                <h3 className="pg-inline-start-2 clr-accent-400">
                    Filter
                </h3>
                <ul className="filters-wrapper flex">
                    <li className="filter"><select name="price" id="price"><option value="Price">Price</option></select></li>
                    <li className="filter"><select name="location" id="location"><option value="Location">Location</option></select></li>
                    <li className="filter"><select name="date" id="date"><option value="Date">Date</option></select></li>
                </ul>
                <button className="button search-button">
                    <img src={searchIcon} alt="" className="search-icon" />
                </button>
            </div>
            <AllEvents eventAmount={8} eventStyle='all-event-style events-page-style' FlyersType='All' />
            <div className="events-page-navigation | container flex-jc-sb pg-3 mg-block-end-6 bg-light-400 clr-dark-300">
                <div className="left-page-navigation">
                    <p><span>{1}</span> out of <span>{1}</span></p>
                </div>
                <div className="right-page-navigation">
                    <button className="button page-navigation-button"><IoIosArrowBack /></button>
                    <button className="button page-navigation-button"><IoIosArrowForward /></button>
                </div>
            </div>
        </div>
        <PromoteCta color='#F28080' />
      </main>
    )
  }
}

export default EventsPage