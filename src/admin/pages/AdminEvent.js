import React, { Component } from "react";
import UpdateEvent from "../../components/events/UpdateEvent";
// import DeleteEvent from "../../components/events/DeleteEvent";
// import sendImage from "../../components/events/SendImage";
// import SendEvent from "../../components/events/SendEvent";
import UpdateMedia from "../../components/events/UpdatePoster";
import PrimaryPopup from "../../components/PrimaryPopup";
import Loading from '../../components/Loading'
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
    newPhotos: [],
    video: '',
    popup: false,
    popupPrompt: 'Are you sure you want to delete this event?',
    loading: false  
};
  setLoading = (e) => {
    this.setState({Loading: false})
  }
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
      this.setState({deletePhotos: [...this.state.deletePhotos, e]})
    }
  }

  getEventMedia  = (mediaType, url) => {
    let media = url
    this.setState({eventInfo: {[mediaType]: media} })
    if (mediaType === 'poster') {
      UpdateEvent({[mediaType]: media}, this.props.id, this.setLoading)
    }
    if (mediaType === 'video') {
      UpdateEvent({[mediaType]: media}, this.props.id, this.setLoading)
    }

    if (mediaType === 'photos') {
      const prevPhoto = this.state.events?.photos
      const filteredPhotos = prevPhoto?.filter(x =>!this.state.deletePhotos.includes(x))
      //this is if deleted and url returns null 
      media = url ? url : []

      this.setState({newPhotos: this.state.newPhotos.concat(media) })
      const newPhotos = filteredPhotos.concat(this.state.newPhotos)
      const newPhotosObj = {[mediaType]:newPhotos.concat(media)} 
      UpdateEvent(newPhotosObj, this.props.id, this.setLoading)
      this.setState({loading: false})
    }
  }

  handleUpdate = async (e) => {
    this.setState({loading: true})
    //if updating poster
    if (this.state.poster) {
      UpdateMedia(this.state.events.id, this.state.events.poster, this.state.poster, this.getEventMedia,'poster')
    }
    //if updating video
    if (this.state.video) {
      UpdateMedia(this.state.events.id, this.state.events.video, this.state.video, this.getEventMedia,'video')
    }
    //if deleting photos
    if (this.state.deletePhotos) {
      this.state.deletePhotos.map((x)=>{
        UpdateMedia(this.state.events.id, x, x, this.getEventMedia, 'photos')
      })
    }
    //if updating photos
    if (this.state.photos) {
      this.state.photos.map(async(x, key)=>{
        UpdateMedia(this.state.events.id, null, x, this.getEventMedia, 'photos')
      })
    }
  }
  testing = (e) => {
    this.setState({events: {...this.state.events, poster: null}})
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
        {this.state.loading && <Loading type='fixed' />}
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
                        <div className="flex">
                          <img src={this.state.poster? URL?.createObjectURL(this.state.poster): this.state.events.poster} alt="" />
                        </div>
                      </li>

                      <li className="mg-block-start-3">
                        <label className="block" htmlFor="">Photos</label>
                        {newArray.map((x, key)=>{
                          const prevPhotos = !this.state.events.photos?.length ? 0 : this.state.events.photos?.length
                          const maxInputs = (4 - prevPhotos) + this.state.deletePhotos?.length
                          if (x === 0 && key < maxInputs) {
                            return <input key={key} className="mg-block-end-1" name="photos" type="file" accept="image/png, image/jpeg"  onChange={(e) => {this.onChangeMedia(e) }}/>
                          }
                        })}
                        <div className="photos-wrapper | flex-wrap gap-0">
                          {this.state.events.photos?.map((x, key)=>{
                        if (!this.state.deletePhotos.includes(x)) {
                          return( 
                            <div key={key} className="flex">
                              <img  src={x} alt="" />
                              <Trash onClick={(e) => { this.onDeleteMedia(x) }}/>
                            </div>
                            )
                        }
                            })}
                          {this.state.photos.map((x, key)=>{
                            return( 
                              <div key={key} className="flex">
                                <img key={key} src={x? URL?.createObjectURL(x): x} alt="" />
                                <Trash onClick={(e) => { this.onDeleteMedia(x) }}/>
                              </div>
                              )
                            })}
                        </div>
                      </li>
                      <li className="mg-block-start-3">
                        <label className="block" htmlFor="">Videos</label>
                        <input name="video" className="mg-block-end-1" type="file" accept="video/mp4,video/x-m4v,video/*" onChange={(e) => { this.onChangeMedia(e)}}/>
                        <div className="flex">
                          {this.state.video ? 
                            <ReactPlayer className='react-player' controls={true} url={URL.createObjectURL(this.state.video)} /> 
                            : 
                            <ReactPlayer className='react-player' controls={true} url={this.state.events.video} />
                          }
                        </div>
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
