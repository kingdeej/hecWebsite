import React, { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import Add1 from "./AddAdmin/Add1";
import Add2 from "./AddAdmin/Add2";
import Add3 from "./AddAdmin/Add3";
import {v4} from 'uuid'
import SendImage from "../../components/events/SendImage";


export default function AddAdmin() {
  const navigate = useNavigate()
  const params = useParams()
  const urlParams = parseInt(params.step)
  const [step, setStep] = useState(urlParams);
  const [nextStep, setNextStep] = useState(0);
  const [eventDetails, setEventDetails] = useState([]);
  const [eventImages, setEventImages] = useState([]);
  //url pathname
  const pathname = window.location.pathname
  const newPathname =  pathname.slice(0, -1)
  
  
  const onSubmitEvent = (e)=>{
    const data = eventDetails
    const getId = v4()
    const id = {'id': getId}
    const objData = {...data[0],...e,...id}
    
    //photos
    const posterImage = eventImages.eventPoster
    const eventPhotos = eventImages.eventPhotos
    const eventvideo = eventImages.eventVideo
    //photo names
    const posterImageName = posterImage.name
    const eventvideoName = eventvideo?.name
    const eventPhotosName = eventPhotos.map((x)=>x.name)
    //objects to pass
    const posterObj = {photoName: posterImageName, eventPhotos: posterImage, mediaType:'poster'}
    const photosObj = {photoName: eventPhotosName, eventPhotos: eventPhotos, mediaType:'photos'}
    const videoObj = {photoName: eventvideoName, eventPhotos: eventvideo, mediaType:'video'}

    SendImage(getId, posterObj,  photosObj, videoObj, objData, getId)
    // navigate to admin
    navigate('/admin')
  }
  
  
  function getEventDetails(e) {
    setEventDetails((prev)=>[...prev, e])
  }
  
  useEffect(() => {
    if (nextStep < urlParams) {
      setStep(0)
      setNextStep(0)
      navigate(newPathname + 0)
    }else{
      setStep(urlParams)
    }
  }, [urlParams])
  
  
  const handleButtonClick = (e) => {
    const nextParams = parseInt(params.step) +1
    navigate(newPathname + nextParams)
    setStep(step + 1)
    setNextStep(step + 1)
  }
  
  const Forms = (e) => {
    switch (step) {
      case 0:
        return (
          <Add1 getEventDetails={getEventDetails} handleButtonClick={handleButtonClick} />
        );
      case 1:
        return (
          <Add2 setEventImages={setEventImages} handleButtonClick={handleButtonClick}/>
        );
        case 2:
          return(
            <Add3 getEventDetails={getEventDetails} onSubmitEvent={onSubmitEvent}/>
        )
      default:
        break;
    }
  };
  return (
    <div className="add-event-page | section">
      <div className="add-event-page-wrapper | clr-dark-300 container">
        <h1 className="primary-heading  |  text-center">Admin</h1>
        <div className="add-event-wrapper">
          <Forms  />
        </div>
      </div>
    </div>
  );
}
