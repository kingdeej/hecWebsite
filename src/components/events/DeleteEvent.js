import { deleteDoc, doc } from 'firebase/firestore'
import { db, storage } from '../../firebase/firebase'
import {deleteObject, listAll, ref} from 'firebase/storage'

export default function DeleteEvent(id, callBack) {
    const docRef = doc(db, 'flyerData', id)
    const imageRef = ref(storage, `eventFlyers/${id}`)
    const handleDeleteEvent = async (e) => {
        try {
            await deleteDoc(docRef)
            .then((response)=>{
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
            await listAll(imageRef)
            .then((response)=>{
                response.items.forEach(element => {
                    deleteObject(ref(storage, `eventFlyers/${id}/${element.name}`))
                    .then((response)=>{
                        callBack(id)
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
                });
            }).catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }
    // handleDeleteMedia()
    handleDeleteEvent()
}
