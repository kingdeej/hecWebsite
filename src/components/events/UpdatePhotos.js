import { ref, deleteObject, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase/firebase'

export default function UpdatePhotos(id, media, poster, getEventMedia) {
    const prevRef = ref(storage, media)
    const mediaRef = ref(storage, `eventFlyers/${id}/${poster.name + id} `)
    
    const deleteMedia = async (e) => {
            try {
                await deleteObject(prevRef)
                    .then((response)=>{
                        updateMedia()
                    })                    
                    .catch((error)=>{
                        console.log(error);
                        updateMedia()
                    })
            } catch (error) {
               console.error(error); 
            }

    }
    const updateMedia = async (e)  => {
        try {
            await uploadBytes(mediaRef, poster)
            .then((response)=>{
                getDownloadURL(response.ref)
                .then((url)=>{
                    getEventMedia(url)
                })
            })
        } catch (error) {
            console.log(error);
        }
    }
    //if there is already a photo
    if (media) {
        deleteMedia()
    }else{
        updateMedia()
    }
}
