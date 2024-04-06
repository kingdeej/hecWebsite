import {setDoc, doc} from 'firebase/firestore'
import { db } from '../../firebase/firebase'

export default function SendEvent(data, id, setLoading) {
    const sendData = async ()=> {
        const docRef = doc(db, 'flyerData', id)
        try {
            await setDoc(docRef, data) 
            setLoading(false)   
            
        } catch (error) {
            console.log(error);
        }
    }
    sendData()
}
