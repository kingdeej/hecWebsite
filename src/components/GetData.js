import React, { useEffect } from 'react'
import {db} from '../firebase/firebase'
import {doc, getDoc} from 'firebase/firestore'

export default function GetData(props) {
    const docRef = doc(db, 'flyerData', 'flyerInfo')
    const first = async (e) => {
        try {
            await getDoc(docRef)
            .then((documentData)=>{
                props(documentData.data()) 
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
