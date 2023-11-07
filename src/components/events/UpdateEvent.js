import React from 'react'
import { db } from '../../firebase/firebase'
import { doc,updateDoc } from 'firebase/firestore'

export default function UpdateEvent(event, id) {
    const docRef = doc(db, 'flyerData', id)
    const handleUpdate = async (e) => {
        try {
            await updateDoc(docRef, event)
            .then((response)=>{
                alert('Updated')
            }).catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            
        }
    }
    handleUpdate()
}
