import {ref, getDownloadURL, listAll, list} from 'firebase/storage'
import {storage} from '../firebase/firebase'

export default function GetImage(getImageList) {
    let poster = []
    let photos = []
    let ids = []
    const imageRef = ref(storage, 'eventFlyers/')
    const getImages = () => {
        listAll(imageRef)
        .then((prefixesIds)=>{
            prefixesIds.prefixes.forEach((prefixes)=>{
                listAll(ref(storage, `eventFlyers/${prefixes.name}/photos`))
                .then((items)=>{
                    items.items.forEach((item)=>{
                        getDownloadURL(item)
                            .then((url)=>{
                                const photosId = prefixes.name
                                const image = url
                                photos.push({[photosId]:image})
                            })
                    })
                })
                .then(()=>{
                    listAll(ref(storage, `eventFlyers/${prefixes.name}/poster`))
                    .then((items)=>{
                        items.items.forEach((item)=>{
                            getDownloadURL(item)
                            .then((url)=>{
                                    const photosId = prefixes.name
                                    const image = {[photosId]:url}
                                    poster.push(image)
                                    const posterObj = {'poster': poster}
                                    const photosObj = {'photos': photos}
                                    getImageList([photosObj, posterObj])
                                })
                        })
                    })

                })
            })
        })
    }
    getImages()
}
