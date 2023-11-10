import { deleteDoc, doc } from 'firebase/firestore'
import { db, storage } from '../../firebase/firebase'
import {deleteObject, ref} from 'firebase/storage'

export default function DeleteEvent(id) {
    const docRef = doc(db, 'flyerData', id)
    const imageRef = ref(storage, 'ae42bfb0-8e14-438c-b347-9ecdba0eb66f/poster/IMG-20231105-WA0005.jpgae42bfb0-8e14-438c-b347-9ecdba0eb66f')
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
    handleDeleteMedia()
    // handleDeleteEvent()
}
