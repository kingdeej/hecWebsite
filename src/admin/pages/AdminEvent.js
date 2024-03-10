import React, { Component } from "react";
import UpdateEvent from "../../components/events/UpdateEvent";
// import DeleteEvent from "../../components/events/DeleteEvent";
// import sendImage from "../../components/events/SendImage";
// import SendEvent from "../../components/events/SendEvent";
import UpdateMedia from "../../components/events/UpdatePoster";
import PrimaryPopup from "../../components/PrimaryPopup";
import ReactPlayer from "react-player";
import {Trash} from '../../images/Icons'
import {eventInputs} from '../components/eventInputs'

export class AdminEvent extends Component {
  state = {
    events: this.props.event,
    eventInfo: {} ,
    poster: '',
    deletePhotos: [],
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
  onChangeMedia = (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    
    if (name !== 'photos') {
      this.setState({[name]: value})
    }
    if (name === 'photos') {
      this.setState({[name]: [...this.state.photos, value] })
    }
  }
  onDeleteMedia = (e)=>{
    const filter = this.state.photos.filter((x)=> x !== e)
    this.setState({photos: filter})
    if (typeof e === 'string') {
      console.log('hello');
    }
  }

  getEventMedia  = (mediaType, url) => {
    console.log(url);
    const poster = url
    this.setState({eventInfo: {[mediaType]: poster} })
    if (mediaType === 'poster') {
      UpdateEvent({[mediaType]: poster}, this.props.id)
    }
    if (mediaType === 'photos') {
      const prevPhoto = this.state.events.photos 
      const currentPhoto = poster
      console.log(poster);
      let newPhoto = {}
      //if there is already a photo
      if (prevPhoto) {
        newPhoto = {[mediaType]: [...prevPhoto, currentPhoto]}
      }else{
        newPhoto = {[mediaType]: [currentPhoto]}
      }
      UpdateEvent(newPhoto, this.props.id)
    }
  }

  handleUpdate = (e) => {
    if (this.state.poster) {
      UpdateMedia(this.state.events.id, this.state.events.poster, this.state.poster, this.getEventMedia,'poster')
    }
    if (this.state.events.photos) {
      console.log('hello');
    }
    if (this.state.photos) {
      this.state.photos.map((x)=>{
        UpdateMedia(this.state.events.id, null, x, this.getEventMedia, 'photos')
      })
    }
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
  }
  render() {
    const newArray = this.state.photos.concat(Array(1).fill(0))
    return (
      <div className="admin-event-page">
        <ul>
          {eventInputs.map((x, key)=>{
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
                        <input className="mg-block-end-1" name='poster' type="file" accept="image/png, image/jpeg" onChange={(e) => {this.onChangeMedia(e) }}/>
                        <img src={this.state.poster? URL?.createObjectURL(this.state.poster): this.state.events.poster} alt="" />
                      </li>
                      <li className="mg-block-start-3">
                        <label className="block" htmlFor="">Photos</label>
                        {newArray.map((x, key)=>{
                          const maxInputs = 4
                          if (x === 0 && key < maxInputs) {
                            return <input key={key} className="mg-block-end-1" name="photos" type="file" accept="image/png, image/jpeg"  onChange={(e) => {this.onChangeMedia(e) }}/>
                          }
                        })}
                        <div className="photos-wrapper | flex-wrap">
                          {this.state.events.photos?.map((x, key)=>{
                            return( 
                              <div key={key} className="flex">
                                <img  src={x} alt="" />
                                <Trash onClick={(e) => { this.onDeleteMedia(x) }}/>
                              </div>
                              )
                            })}
                          {this.state.photos.map((x, key)=>{
                            return( 
                              <div className="flex">
                                <img key={key} src={x? URL?.createObjectURL(x): x} alt="" />
                                <Trash onClick={(e) => { this.onDeleteMedia(x) }}/>
                              </div>
                              )
                            })}
                            
                        </div>
                        
                      </li>
                      <li className="mg-block-start-3">
                        <label className="block" htmlFor="">Videos</label>
                        <input className="mg-block-end-1" type="file" accept="video/mp4,video/x-m4v,video/*" onChange={(e) => { this.setState({image: e.target.files[0]}) }}/>
                        {this.state.events.video ? <ReactPlayer className='react-player' controls={true} url={this.state.events.video} /> : ''}
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
