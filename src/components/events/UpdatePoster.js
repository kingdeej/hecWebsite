import { ref, deleteObject, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase/firebase'

export default function UpdateMedia(id, media, poster, getEventMedia, mediaType) {
    const prevRef = ref(storage, media)
    const mediaRef = ref(storage, `eventFlyers/${id}/${mediaType}-${poster.name + id} `)
    
    const deleteMedia = async (e) => {
            try {
                await deleteObject(prevRef)
                    .then((response)=>{
                        updateMedia()
                        console.log('deleted');
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
                    console.log('updated');
                    getEventMedia(mediaType, url)
                })
            })
        } catch (error) {
            console.log(error);
        }
    }
    //if there is already a photo
    // if (media) {
    //     deleteMedia()
    // }else{
    // }
    updateMedia()
}
