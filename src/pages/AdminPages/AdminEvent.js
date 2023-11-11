import React, { Component } from "react";
import UpdateEvent from "../../components/events/UpdateEvent";
import DeleteEvent from "../../components/events/DeleteEvent";
import sendImage from "../../components/SendImage";
import UpdateMedia from "../../components/events/UpdateMedia";

export class AdminEvent extends Component {
  state = {
    events: this.props.event,
    eventInfo: {} ,
    image: ''
  };
  onChangeEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({events: {...this.state.events, [name]: value}})
    this.setState({eventInfo: {...this.state.eventInfo, [name]: value}})
  };
  getEventMedia  = (e) => {
    const poster = e
    // this.setState({eventInfo: {...this.state.eventInfo, poster} })
    UpdateEvent({...this.state.eventInfo, poster}, this.props.id)
  }
  
  handleUpdate = (e) => {
    const posterObj = {photoName: this.state.image.name, eventPhotos: this.state.image, mediaType:'poster'}
    UpdateMedia(this.state.events.id, this.state.events.poster, this.state.image, this.getEventMedia)
    // sendImage(this.state.events.id, posterObj)
  }
  handleDelete = (e) => {
    DeleteEvent(this.props.id, this.state.events.poster)
  }

  render() {
    return (
      <div className="admin-event-page">
        <ul>
          <li>
            <label htmlFor="">Event Name</label>
            <input
              className="text-input"
              name="eventName"
              onChange={(e) => {
                this.onChangeEvent(e);
              }}
              value={this.state.events.eventName}
              type="text"
            />
          </li>

          <li>
            <label htmlFor="">Event Date</label>
            <input
            className="text-input"            
              name="eventDate"
              onChange={(e) => {
                this.onChangeEvent(e);
              }}
              value={this.state.events.eventDate}
              type="text"
            />
          </li>
          <li>
            <label htmlFor="">Event Price</label>
            <input
              className="text-input" 
              name="eventPrice"
              onChange={(e) => {
                this.onChangeEvent(e);
              }}
              value={this.state.events.eventPrice}
              type="text"
            />
          </li>

          <li>
              <label htmlFor="">Event Address</label>
              <div>
              <ul className="wrapper">
                
                <input
                  className="text-input"
                  name="streetAddress"
                  onChange={(e) => {
                    this.onChangeEvent(e);
                  }}
                  value={this.state.events.streetAddress}
                  type="text"
                />
                <input
                  className="text-input"
                  name="eventParish"
                  onChange={(e) => {
                    this.onChangeEvent(e);
                  }}
                  value={this.state.events.eventParish}
                  type="text"
                />
                <input
                  className="text-input"
                  name="eventStreet"
                  onChange={(e) => {
                    this.onChangeEvent(e);
                  }}
                  value={this.state.events.eventStreet}
                  type="text"
                />
              </ul>        
              </div>
          </li>
          <li>
            <label htmlFor="">Poster</label>
            <input type="file" accept="image/png, image/jpeg" onChange={(e) => { this.setState({image: e.target.files[0]}) }}/>
          </li>
        <button onClick={(e) => { this.handleDelete() }}>Delete</button>
        <button onClick={(e) => { this.handleUpdate() }}>Submit</button>
        </ul>
      </div>
    );
  }
}

export default AdminEvent;
