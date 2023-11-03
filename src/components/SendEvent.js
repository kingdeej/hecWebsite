import {setDoc, doc} from 'firebase/firestore'
import { db } from '../firebase/firebase'

export default function SendEvent(data) {
    const sendData = async ()=> {
        const docRef = doc(db, 'flyerData', 'flyerInfo')
        try {
            await setDoc(docRef, data) 
            alert('sent')   
        } catch (error) {
            console.log(error);
        }
    }
    sendData()
}
