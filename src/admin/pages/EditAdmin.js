import React, { Component } from 'react'
import Events from '../../components/Events';
import AdminEvent from './AdminEvent';
import DeleteEvent from '../../components/events/DeleteEvent'
import {Trash, Plus} from '../../images/Icons'
import { Link } from 'react-router-dom';
import PrimaryPopup from '../../components/PrimaryPopup';

export class EditAdmin extends Component {
    state ={
        events: [],
        eventId: '',
        step: 0,
        event: {},
        popup: false,
        popupPrompt: 'Are you sure you want to delete this event?',
        loading: false,
    }
    setLoading = () => {
        this.setState({loading: false})
    }

    getEvents = (e) => {
        this.setState({events: e})
    }
    handleEventClick = (e) => {
        this.setState({eventId: e.target.id})
        this.setState({step: 1})
        this.setState({event: this.state.events.find((x)=>x.id === e.target.id)})
    }
    handleDelete = (e) => {
        this.setState({eventId: e})
        if (this.state.popup) {
            this.setState({popup: false})
            this.setState({loading: true})
            DeleteEvent(this.state.eventId, this.setLoading)
        }else{
            this.setState({popup: true})
        }
    }
    EventPages = (e) =>{
        const url = window.location.pathname  
        const urlEvents = url.includes('events') 
        switch (urlEvents? 0 :this.state.step) {
            case 0:
                return(
                    <ul className='admin-events-list | bg-light-300 pg-inline-2'>
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
                                    <button onClick={(e) => { this.handleDelete(x.id) }} className='button'>
                                        <Trash />
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
            <div className="container | clr-dark-300">
                <h1 className='primary-heading'>Events</h1>
                <div className="event-panel | mg-block-4 pg-block-end-2 flex-jc-sb">
                    <Link className='flex gap-1' to={'/admin/add-event/0'}><Plus /><button className='button fs-300'>New Event</button></Link>
                    <Trash />
                </div>
                <this.EventPages />
            </div>
            <PrimaryPopup 
                isOpen={this.state.popup} 
                prompt={this.state.popupPrompt} 
                isClosed={this.handleDelete} 
            />
        </div>
    )
  }
}

export default EditAdmin