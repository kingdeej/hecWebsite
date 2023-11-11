import React, { Component } from 'react'
import Events from '../../components/Events';
import AdminEvent from './AdminEvent';
import { Link } from 'react-router-dom';

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
                    <ul className='admin-events-list flex-column'>
                        {this.state.events?.map((x, key)=>{
                            return(
                                <li key={key} className='admin-event vertical-align'>
                                    <button className='button' id={x.id} key={key} onClick={(e) => { this.handleEventClick(e) }}>
                                        <Link to={'/admin-page/' + x.id}>
                                            <div id={x.id} className="flex vertical-align">
                                                <img id={x.id} src={x.poster} alt="" />
                                                <h3 id={x.id} className="secondary-header">
                                                    {x.eventName}
                                                </h3>
                                            </div>
                                        </Link>
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
        <div className='page-block-padding'>
                <div className="page-inline-padding">
                    <this.EventPages />
                </div>
        </div>
    )
  }
}

export default EditAdmin