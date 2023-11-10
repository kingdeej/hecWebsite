import React, { Component } from "react";
import UpdateEvent from "../../components/events/UpdateEvent";
import DeleteEvent from "../../components/events/DeleteEvent";
import sendImage from "../../components/SendImage";

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
  handleUpdate = (e) => {
    const posterObj = {photoName: this.state.image.name, eventPhotos: this.state.image, mediaType:'poster'}
    // UpdateEvent(this.state.eventInfo, this.props.id)
    sendImage(this.state.events.id, posterObj)
  }
  handleDelete = (e) => {
    DeleteEvent(this.props.id)
  }

  render() {
    return (
      <div className="admin-event-page">
        <ul>
          <li>
            <label htmlFor="">Event Name</label>
            <input
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
                  name="eventParish"
                  onChange={(e) => {
                    this.onChangeEvent(e);
                  }}
                  value={this.state.events.eventParish}
                  type="text"
                />
                <input
                  name="eventStreet"
                  onChange={(e) => {
                    this.onChangeEvent(e);
                  }}
                  value={this.state.events.eventStreet}
                  type="text"
                />
                <input
                  name="eventStreetAddress"
                  onChange={(e) => {
                    this.onChangeEvent(e);
                  }}
                  value={this.state.events.eventStreetAddress}
                  type="text"
                />
              </ul>        
              </div>
          </li>
        <input type="file" accept="image/png, image/jpeg" onChange={(e) => { this.setState({image: e.target.files[0]}) }}/>
        <button onClick={(e) => { this.handleDelete() }}>Delete</button>
        <button onClick={(e) => { this.handleUpdate() }}>Submit</button>
        </ul>
      </div>
    );
  }
}

export default AdminEvent;
