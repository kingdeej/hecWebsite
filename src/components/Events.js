import flyImg1 from '../images/flyImg1.jpg'
import flyImg2 from '../images/flyImg2.jpg'
import {db} from '../firebase/firebase'
import {doc, collection, getDocs, getDoc} from 'firebase/firestore'
import { useEffect } from 'react';
import React from 'react'
import GetData from './GetData';
import GetImage from './GetImage';


export default function Events(getEventInfos) {
  let eventDetails = []
  let newDetails = {}
  function getEventDetails(e){
    eventDetails = e
    GetImage((e) => { getEventMedia(e) })
  }
  function getEventMedia(e) {
    const eventId = eventDetails[0]?.id
    const photos = e?.find((x)=>{return x.photos}).photos
    const poster = e?.find((x)=>{return x.poster}).poster
    const posterId = poster?.filter((x)=>{
      return x[eventId] 
    })
    const photosId = photos?.filter((x)=>{
      return x[eventId] 
    })
    const filteredPoster = posterId?.map((e) =>{
      return Object?.values(e)[0]
    })[0]
    const filteredPhotos = photosId?.map((e) =>{
      return Object?.values(e)[0]
    })
      newDetails = eventDetails && Object?.assign(eventDetails[0], {poster: filteredPoster}, {photos: filteredPhotos});
      getEventInfos([newDetails])
  }
  GetData((e) => { getEventDetails(e)})


}



// const events = [
//     {
//       eventId: 0,
//       eventImg: flyImg1,
//       eventName: 'Jamaican Party',
//       eventLocation: 'Ocho Rios',
//       eventDate: 'Sat July 25',
//       eventPrice: 500,
//     },
//     {
//       eventId: 1,
//       eventImg: flyImg2,
//       eventName: 'Jamaican Party2',
//       eventLocation: 'Ocho Rios',
//       eventDate: 'Sat July 25',
//       eventPrice: 500,
//     },
//     {
//       eventId: 2,
//       eventImg: flyImg2,
//       eventName: 'Jamaican Party2',
//       eventLocation: 'Ocho Rios',
//       eventDate: 'Sat July 25',
//       eventPrice: 500,
//     },
//     {
//       eventId: 3,
//       eventImg: flyImg2,
//       eventName: 'Jamaican Party2',
//       eventLocation: 'Ocho Rios',
//       eventDate: 'Sat July 25',
//       eventPrice: 500,
//     },
//     {
//       eventId: 4,
//       eventImg: flyImg2,
//       eventName: 'Jamaican Party2',
//       eventLocation: 'Ocho Rios',
//       eventDate: 'Sat July 25',
//       eventPrice: 500,
//     },
//     {
//       eventId: 5,
//       eventImg: flyImg2,
//       eventName: 'Jamaican Party2',
//       eventLocation: 'Ocho Rios',
//       eventDate: 'Sat July 25',
//       eventPrice: 500,
//     },
//     {
//       eventId: 6,
//       eventImg: flyImg2,
//       eventName: 'Jamaican Party2',
//       eventLocation: 'Ocho Rios',
//       eventDate: 'Sat July 25',
//       eventPrice: 500,
//     },
//     {
//       eventId: 7,
//       eventImg: flyImg2,
//       eventName: 'Jamaican Party2',
//       eventLocation: 'Ocho Rios',
//       eventDate: 'Sat July 25',
//       eventPrice: 500,
//     },

//   ]
  // export default events