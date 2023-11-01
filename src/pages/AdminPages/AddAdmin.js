import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { stringify } from "json5";
import {AiOutlineInstagram, AiFillFacebook, AiOutlineWhatsApp,} from 'react-icons/ai'



export default function AddAdmin() {
  const [step, setStep] = useState(0);
  const [posterImg, setPosterImg] = useState([new Object]);
  const  [flyerInfo, setFlyerInfo] = useState({
    fname: '',
    lname: ''
  })

  function addImagesCount (e) {
    if (posterImg.length > 4) {
      return 4
    }
    if (posterImg.length === 1) {
      return 1
    }else{
      return posterImg.length -1
    }
  }
  
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
 
    setFlyerInfo((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
  }
  const Forms = (e) => {
    const firstPoster = posterImg.find((x)=>x.id === '0')
    const addPosterImg = (event) => {
      const filterPoster = posterImg.filter((x)=>x.id !== event.target.id)
      const findPoster = posterImg.find((x)=>x.id === event.target.id)
      const newObj = {
        id: event.target.id,
        posterImg: URL.createObjectURL(event.target.files[0])
      }
      if (findPoster) {
      }else{
        setPosterImg([...posterImg, newObj])
      }
    }
    const deletePosterImg = (event) => {
      const filterPoster = posterImg.filter((x)=>x.id !== event.target.id)
      const findPoster = posterImg.find((x)=>x.id === event.target.id)
      if (findPoster) {
        setPosterImg(filterPoster)        
      }
    }

    switch (step) {
      case 0:
        return (
          <div className="add-event | flex-column space-between">
            <h2 className="secondary-header">Add event info</h2>
            <input
              onChange={(e) => { handleChange(e) } } 
              className="text-input"
              required
              placeholder="Event Name"
              type="text"
              name="fname"
              id="eventName"
            />
            <input
              className="text-input"
              required
              placeholder="Event Price"
              type="text"
              name="event-Price"
              id="eventPrice"
            />
            <input
              className="text-input"
              required
              type="date"
              name="event-Date"
              id="eventDate"
            />
            <hr />
            <div className="location-wrapper space-between">
              <input
                className="text-input"
                required
                placeholder="Street"
                type="text"
                name="event-Street"
                id="eventStreet"
              />
              <input
                className="text-input"
                required
                placeholder="Parish"
                type="text"
                name="event-Parish"
                id="Parish"
              />
            </div>
            <input
              className="text-input"
              required
              placeholder="Street Address"
              type="text"
              name="street-address"
              id="streetaddress"
            />
            <button
              onClick={(e) => {
                setStep(step +1);
              }}
              className="button get-tickets-button"
            >
              Next
            </button>
          </div>
        );
      case 1:
        return (
          <div className="add-event | flex-column space-between">
            <h2 className="secondary-header">Add Photos</h2>
            <label htmlFor="">Add Poster</label>
            <div className="add-img-wrapper flex-center">
              <div className="position-center">
                {
                  !firstPoster ? <HiPlus className="add-img-button position-center" /> : <img src={firstPoster && firstPoster.posterImg} alt="" /> 
                }
              </div>
              <input
                onChange={(e) => {addPosterImg(e) }}
                onClick={(e) => { posterImg && deletePosterImg(e)}}
                accept="image/png, image/jpeg"
                type="file"
                name="poster"
                id='0'
              />
            </div>
            <label htmlFor="">Additional Photos</label>
            <div className="add-imgs-wrapper flex">
              {[...Array(addImagesCount())].map((x, key)=>{
                const keyCount = key +1
                const otherFlyerImages = posterImg.find((x)=>x.id === stringify(keyCount))
                
                return(
                  <div key={key} className="add-img-wrapper flex-center">
                  <div className="position-center">
                    {
                      !otherFlyerImages ? <HiPlus className="add-img-button position-center" /> : <img src={otherFlyerImages && otherFlyerImages.posterImg} alt="" /> 
                    }
                  </div>
                  <input
                    onChange={(e) => {addPosterImg(e) }}
                    onClick={(e) => { posterImg && deletePosterImg(e)}}
                    accept="image/png, image/jpeg"
                    type="file"
                    name="poster"
                    id={stringify(keyCount)}
                  />
                </div>
                )
              })}
            </div>
              <button
              onClick={(e) => {
                setStep(step +1);
              }}
              className="button get-tickets-button"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return(
          <div className="add-event | flex-column space-between">
            <h2 className="secondary-header">Add event info</h2>
            <input
              className="text-input"
              required
              placeholder="Promoter Name"
              type="text"
              name="promoter-name"
              id="promoterName"
            />
            <input
              className="text-input"
              required
              placeholder="Promoter Email"
              type="email"
              name="promoter-email"
              id="promoterEmail"
            />
            <input
              className="text-input"
              required
              placeholder="Promoter Phone Number"
              type="number"
              name="promoter-name"
              id="promoterName"
            />
            <label htmlFor="">Additional Photos</label>

            <ul className="promoter-links-wrapper space-between">
              <li className="promoter-link-wrapper flex-column">
                <AiOutlineInstagram />
                <input
                className="text-input"
                required
                placeholder="Add Social Link"
                type="number"
                name="promoter-name"
                id="promoterName"
              />
              </li>
              <li className="promoter-link-wrapper flex-column">
                <AiFillFacebook />
                <input
                className="text-input"
                required
                placeholder="Add Social Link"
                type="number"
                name="promoter-name"
                id="promoterName"
              />
              </li>
              <li className="promoter-link-wrapper flex-column">
                <AiOutlineWhatsApp />
                <input
                className="text-input"
                required
                placeholder="Add Social Link"
                type="number"
                name="promoter-name"
                id="promoterName"
              />
              </li>
            </ul>
            <button
              onClick={(e) => {
                setStep(step +1);
              }}
              className="button get-tickets-button"
            >
              Submit
            </button>
          </div>

        )
      default:
        break;
    }
  };

  return (
    <form className="add-event-page | page-block-padding">
      <div className="add-event-page-wrapper | page-inline-padding">
        <h1 className="primary-header | text-center">Admin</h1>
        <div className="add-event-wrapper">
          <Forms  />
        </div>
      </div>
    </form>
  );
}
