import React, { useState } from 'react'
import { HiPlus } from "react-icons/hi";
import { stringify } from "json5";

export default function Add2(props) {
    const [eventImage, setEventImage] = useState('')
    const [eventImages, setEventImages] = useState([])

    
    const addPosterImg = (event) => {
        if (event.target.files[0] === eventImage) {
            setEventImage('')
        }else{
            setEventImage(event.target.files[0])
        }
    }
    const addPostersImg = (event) => {
        const events = event.target.files[0]
        if (events === undefined) {
        }else{
            if (eventImages?.length === 0) {
                setEventImages([events])
            }else{
                if (eventImages.includes(events)) {
                    const filter = eventImages.filter((x)=>x !== events)
                    setEventImages(filter)
                }else{
                    setEventImages((prev)=>[...prev, events])
                }
            }

        }
    }

    function addImagesCount (e) {
        if (eventImages.length > 3) {
            return 4
        }
        if (!eventImages) {
            return 1
        }else if(eventImages){
            return eventImages.length + 1
        }
    }

    const handleButtonClick = (event) => {
        event.preventDefault()
        props.handleButtonClick()
        const EventImg = {
            'eventPoster': eventImage, 
            'eventPhotos': eventImages
        }
        props.setEventImages(EventImg)
    }
  return (
    <form onSubmit={(e) => { handleButtonClick(e) }} className="add-event | flex-column space-between">
            <h2 className="secondary-header">Add Photos</h2>
            <label htmlFor="">Add Poster</label>
            <div className="add-img-wrapper flex-center">
              <div className="position-center">
                {
                  !eventImage ? <HiPlus className="add-img-button position-center" /> : <img src={URL.createObjectURL(eventImage)} alt="" /> 
                }
              </div>
              <input
              required
                onChange={(e) => {addPosterImg(e) }}
                onClick={(e) => { addPosterImg(e)}}
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
                const eventsImagesList = !eventImages ? '' : eventImages[key]
                const eventsImagesLength = eventImages.length
                return(
                  <div key={key} className="add-img-wrapper flex-center">
                  <div className="position-center">
                    {
                      eventsImagesLength === key ? <HiPlus className="add-img-button position-center" /> : <img src={URL.createObjectURL(eventsImagesList)} alt="" /> 
                    }
                  </div>
                  <input
                    onChange={(e) => {addPostersImg(e) }}
                    onClick={(e) => { addPostersImg(e)}}
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
              type="submit"
              className="button get-tickets-button"
            >
              Next
            </button>
          </form>
  )
}
