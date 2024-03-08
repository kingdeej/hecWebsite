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
    // UpdateEvent({...this.state.eventInfo, poster}, this.props.id)
    UpdateEvent(this.state.eventInfo, this.props.id)
  }
  
  handleUpdate = (e) => {
    const posterObj = {photoName: this.state.poster.name, eventPhotos: this.state.poster, mediaType:'poster'}
    if (this.state.poster) {
      UpdateMedia(this.state.events.id, this.state.events.poster, this.state.image, this.getEventMedia())
    }else{
      this.getEventMedia()
    }
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
  eventInputs =[
    {
      eventInfo: [
        {
          inputType: 'Event Name',
          eventName: 'eventName',
        },
        {
          inputType: 'Event Date',
          eventName: 'eventDate',
        },
        {
          inputType: 'Event Price',
          eventName: 'eventPrice',
        }
      ],
      eventAddress: [
        {
          eventName: 'streetAddress',
        },
        {
          eventName: 'eventStreet',
        },
        {
          eventName: 'eventParish',
        },
      ],
      promoterInfo: [
        {
          inputType: 'Promoter Name',
          eventName: 'PromoterName',
        },
        {
          inputType: 'Promoter Email',
          eventName: 'PromoterEmail',
        },
        {
          inputType: 'Promoter Number',
          eventName: 'PromoterNumber',
        },
      ]
      

    }
  ]


  render() {
    return (
      <div className="admin-event-page">
        <ul>
          {this.eventInputs.map((x, key)=>{
            return(
              <li key={key}>
                <div>
                  <ul className="flow-2">
                    {x.eventInfo.map((info, key)=>{
                      return(
                        <li key={key}>
                        <label htmlFor="">{info.inputType}</label>
                        <input
                          className="text-input"
                          name={info.eventName}
                          onChange={(e) => {
                            this.onChangeEvent(e);
                          }}
                          value={this.state.events[info.eventName]}
                          type="text"
                        />
                      </li>
                      )
                    })}
                      <label htmlFor="">Event Address</label>
                    {x.eventAddress.map((info, key)=>{
                      return(
                        <li key={key}>
                        <input
                          className="text-input"
                          name={info.eventName}
                          onChange={(e) => {
                            this.onChangeEvent(e);
                          }}
                          value={this.state.events[info.eventName]}
                          type="text"
                        />
                      </li>
                      )
                    })}
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
                        {this.state.events.video ? <ReactPlayer className='react-player' controls={true} url={this.state.events.video} /> : ''
                        }
                      </li>
                  </ul>
                  {x.promoterInfo.map((info, key)=>{
                    return(
                      <li key={key}>
                        <label htmlFor="">{info.inputType}</label>
                        <input
                          className="text-input"
                          name={info.eventName}
                          onChange={(e) => {
                            this.onChangeEvent(e);
                          }}
                          value={this.state.events[info.eventName]}
                          type="text"
                        />
                      </li>
                    )
                  })}
                  </ul>
                </div>
              </li>
            )
        })}
        <div className="even-columns gap-2 mg-block-start-5">
          <button datatype-button="primary" className="button  full-width" onClick={(e) => { this.handleDelete() }}>Delete</button>
          <button datatype-button="secondary" className="button full-width" onClick={(e) => { this.handleUpdate() }}>Submit</button>

        </div>
        </ul>
        <PrimaryPopup isOpen={this.state.popup} prompt={this.state.popupPrompt} isClosed={this.handleDelete} />
        <PrimaryPopup isOpen={this.state.popup} prompt={this.state.popupPrompt} isClosed={this.handleDelete} />
      </div>
    );
  }
}

export default AdminEvent;
