import { deleteDoc, doc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../../firebase/firebase'

export default function DeleteEvent(id) {
    const docRef = doc(db, 'flyerData', id)
    const handleDelete = async (e) => {
        try {
            await deleteDoc(docRef)
            .then((response)=>{
                alert('Deleted')
            }).catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            
        }
    }
    handleDelete()
}
