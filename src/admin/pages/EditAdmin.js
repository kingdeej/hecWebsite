import React, { Component } from 'react'
import Events from '../../components/Events';
import AdminEvent from './AdminEvent';
import {AiOutlinePlus,AiOutlineDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import PrimaryPopup from '../../components/PrimaryPopup';

export class EditAdmin extends Component {
    state ={
        events: [],
        eventId: '',
        step: 0,
        event: {},
    }

    getEvents = (e) => {
        this.setState({events: e})
    }
    handleEventClick = (e) => {
        this.setState({eventId: e.target.id})
        this.setState({step: 1})
        this.setState({event: this.state.events.find((x)=>x.id === e.target.id)})
    }
    EventPages = (e) =>{
        const url = window.location.pathname  
        const urlEvents = url.includes('events') 
        switch (urlEvents? 0 :this.state.step) {
            case 0:
                return(
                    <ul className='admin-events-list | pg-3'>
                        {this.state.events?.map((x, key)=>{
                            return(
                                <li key={key} className='admin-event | flex-jc-sb'>
                                    <button className='admin-event-button | button' id={x.id} key={key} onClick={(e) => { this.handleEventClick(e) }}>
                                        <Link to={'/admin/' + x.id}>
                                            <div id={x.id} className="flex-al-c gap-3">
                                                <img id={x.id} src={x.poster} alt="" />
                                                <h3 id={x.id} className="secondary-header">
                                                    {x.eventName}
                                                </h3>
                                            </div>
                                        </Link>
                                    </button>
                                    <button className='button'>
                                        <AiOutlineDelete />
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                )
            case 1: 
            return(
                <AdminEvent id={this.state.eventId} event={this.state.event} />
            )
            default:
                break;
        }
    }
    componentDidMount(){
        Events((e) => { this.getEvents(e) })
    }
  render() {
    return(
        <div className='edit-admin | section'>
            <div className="container clr-dark-300">
                <h1 className='primary-heading'>Events</h1>
                <div className="event-panel | mg-block-4 pg-block-end-2 flex-jc-sb">
                    <div className='flex gap-2'>
                        <AiOutlinePlus />
                        <button className='button'>New Event</button>
                    </div>
                    <AiOutlineDelete />
                </div>
                <this.EventPages />
            </div>
            <PrimaryPopup prompt='hello' action={console.log('hello')} />
        </div>
    )
  }
}

export default EditAdmin