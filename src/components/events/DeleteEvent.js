import { deleteDoc, doc } from 'firebase/firestore'
import { db, storage } from '../../firebase/firebase'
import {deleteObject, ref, getMetadata} from 'firebase/storage'

export default function DeleteEvent(id, media) {
    const docRef = doc(db, 'flyerData', id)
    const imageRef = ref(storage, `${media}`)
    const handleDeleteEvent = async (e) => {
        try {
            await deleteDoc(docRef)
            .then((response)=>{
                alert('Deleted')
                handleDeleteMedia()
            }).catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }
    const handleDeleteMedia = async (e) => {
        try {
            await deleteObject(imageRef)
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
        console.log();
    }
    // handleDeleteMedia()
    handleDeleteEvent()
}
