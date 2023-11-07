import {setDoc, doc, addDoc, collection, updateDoc, set} from 'firebase/firestore'
import { db } from '../firebase/firebase'

export default function SendEvent(data, id) {
    const sendData = async ()=> {
        const docRef = doc(db, 'flyerData', id)
        const docRefs = collection(db, 'flyerData')
        // console.log(data);
        try {
            await setDoc(docRef, data) 
            alert('sent')   
        } catch (error) {
            console.log(error);
        }
    }
    sendData()
}
