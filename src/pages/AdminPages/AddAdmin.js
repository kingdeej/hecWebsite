import React, { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import Add1 from "./Add1";
import Add2 from "./Add2";
import Add3 from "./Add3";
import SendEvent from "../../components/SendEvent";
import {v4} from 'uuid'
import SendImage from "../../components/SendImage";


export default function AddAdmin() {
  const navigate = useNavigate()
  const params = useParams()
  const urlParams = parseInt(params.step)
  const [step, setStep] = useState(urlParams);
  const [nextStep, setNextStep] = useState(0);
  const [eventDetails, setEventDetails] = useState([]);
  const [eventImages, setEventImages] = useState([]);


  const onSubmitEvent = (e)=>{
    const data = eventDetails
    const getId = v4()
    const id = {'id': getId}
    const objData = {0:{...data[0],...e,...id}}

    //photos
    const posterImage = eventImages.eventPoster
    const eventPhotos = eventImages.eventPhotos
    //photo names
    const posterImageName = posterImage.name
    const eventPhotosName = eventPhotos.map((x)=>x.name)
    //objects to pass
    const posterObj = {photoName: posterImageName, eventPhotos: posterImage, mediaType:'poster'}
    const photosObj = {photoName: eventPhotosName, eventPhotos: posterImage, mediaType:'photos'}
    SendImage(getId, posterObj,  photosObj)
    SendEvent(objData)
  }

  
  function getEventDetails(e) {
    setEventDetails((prev)=>[...prev, e])
  }

  useEffect(() => {
    if (nextStep < urlParams) {
      setStep(0)
      setNextStep(0)
      navigate('/Admin-page/add-event/' + 0)
    }else{
      setStep(urlParams)
    }
  }, [urlParams])
  
  

  
  const handleButtonClick = (e) => {
    const nextParams = parseInt(params.step) +1
    navigate('/Admin-page/add-event/' + nextParams)
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
    <div className="add-event-page | page-block-padding">
      <div className="add-event-page-wrapper | page-inline-padding">
        <h1 className="primary-header | text-center">Admin</h1>
        <div className="add-event-wrapper">
          <Forms  />
        </div>
      </div>
    </div>
  );
}
