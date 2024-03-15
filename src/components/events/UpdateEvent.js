import { db } from '../../firebase/firebase'
import { doc,updateDoc } from 'firebase/firestore'

export default function UpdateEvent(event, id, setLoading) {
    const docRef = doc(db, 'flyerData', id)
    const handleUpdate = async (e) => {
        try {
            await updateDoc(docRef, event)
            .then((response)=>{
                setLoading(false)
            }).catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            console.log(error );
        }
    }
    handleUpdate()
}
