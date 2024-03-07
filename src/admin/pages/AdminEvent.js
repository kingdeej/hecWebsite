import React, { Component } from "react";
import UpdateEvent from "../../components/events/UpdateEvent";
import DeleteEvent from "../../components/events/DeleteEvent";
import sendImage from "../../components/SendImage";
import UpdateMedia from "../../components/events/UpdateMedia";
import PrimaryPopup from "../../components/PrimaryPopup";
import ReactPlayer from "react-player";

export class AdminEvent extends Component {
  state = {
    events: this.props.event,
    eventInfo: {} ,
    poster: '',
    photos: [],
    video: '',
    popup: false,
    popupPrompt: 'Are you sure you want to delete this event?',
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
    if (this.state.popup) {
      this.setState({popup: false})
      console.log('yess');
    }else{
        this.setState({popup: true})
    }
    // DeleteEvent(this.props.id, this.state.events.poster)
  }
  handleImgChange = (e) => {
    console.log(e);
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
              <ul className="wrapper | flow-1">
                <li>
                  <input
                    className="text-input"
                    name="streetAddress"
                    onChange={(e) => {
                      this.onChangeEvent(e);
                    }}
                    value={this.state.events.streetAddress}
                    type="text"
                  />
                </li>
                <li>
                  <input
                    className="text-input"
                    name="eventParish"
                    onChange={(e) => {
                      this.onChangeEvent(e);
                    }}
                    value={this.state.events.eventParish}
                    type="text"
                  />
                </li>
                <li>
                  <input
                    className="text-input"
                    name="eventStreet"
                    onChange={(e) => {
                      this.onChangeEvent(e);
                    }}
                    value={this.state.events.eventStreet}
                    type="text"
                  />
                </li>
              </ul>        
              </div>
          </li>
          <div>
            <ul className="media-wrapper">
              <li className="mg-block-start-3">
                <label className="block" htmlFor="">Poster</label>
                <input className="mg-block-end-1" type="file" accept="image/png, image/jpeg" onChange={(e) => { this.setState({poster: e.target.files[0]}) }}/>
                <img src={this.state.poster? URL?.createObjectURL(this.state.poster): this.state.events.poster} alt="" />
              </li>
              <li className="mg-block-start-3">
                <label className="block" htmlFor="">Photos</label>
                <input className="mg-block-end-1" type="file" accept="image/png, image/jpeg" onChange={(e) => { this.setState({photos: [...this.state.photos, e.target.files[0]] }) }}/>
                <div className="photos-wrapper | flex-wrap">
                  {this.state.photos.map((x, key)=>{
                    return(
                      <img key={key} src={x? URL?.createObjectURL(x): x} alt="" />
                      
                    )
                  })}
                </div>
                
              </li>
              <li className="mg-block-start-3">
                <label className="block" htmlFor="">Videos</label>
                <input className="mg-block-end-1" type="file" accept="video/mp4,video/x-m4v,video/*" onChange={(e) => { this.setState({image: e.target.files[0]}) }}/>
                <ReactPlayer className='react-player' controls={true} url={this.state.events.video}/>
              </li>
            </ul>
          </div>
        <button datatype-button="primary" className="button full-width" onClick={(e) => { this.handleDelete() }}>Delete</button>
        <button datatype-button="secondary" className="button full-width" onClick={(e) => { this.handleUpdate() }}>Submit</button>
        </ul>
        <PrimaryPopup isOpen={this.state.popup} prompt={this.state.popupPrompt} isClosed={this.handleDelete} />
      </div>
    );
  }
}

export default AdminEvent;
