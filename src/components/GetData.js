import React, { useEffect } from 'react'
import {db} from '../firebase/firebase'
import {collection, doc, getDoc, getDocs} from 'firebase/firestore'

export default function GetData(props) {
    const docRef = collection(db, 'flyerData')
    let eventData = []
    const first = async (e) => {
        try {
            await getDocs(docRef)
            .then((documentDatas)=>{
                documentDatas.forEach((documentData)=>{
                    eventData = [...eventData, documentData.data()]
                    props(eventData) 
                });
            })
            .catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }
    first()
    
}
