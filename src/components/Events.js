import flyImg1 from '../images/flyImg1.jpg'
import flyImg2 from '../images/flyImg2.jpg'
import {db} from '../firebase/firebase'
import {doc, collection, getDocs, getDoc} from 'firebase/firestore'
import { useEffect } from 'react';
import React from 'react'


// export default function Events() {
//   const docRef = collection(db, 'flyerData')
//   // const docId = getDocs(db, )
//   try {
//     getDocs(docRef)
//     .then((docData)=>{
//       console.log(
//         docData.docs.map((doc)=>({...doc.data(), id: doc.id}))
//       )
//     })
//   } catch (error) {
    
//   }
  
  
// }



const events = [
    {
      eventId: 0,
      eventImg: flyImg1,
      eventName: 'Jamaican Party',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 1,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 2,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 3,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 4,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 5,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 6,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },
    {
      eventId: 7,
      eventImg: flyImg2,
      eventName: 'Jamaican Party2',
      eventLocation: 'Ocho Rios',
      eventDate: 'Sat July 25',
      eventPrice: 500,
    },

  ]
  export default events