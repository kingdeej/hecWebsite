import {ref, getDownloadURL, listAll, list} from 'firebase/storage'
import {storage} from '../firebase/firebase'

export default function GetImage(getImageList, prevImage) {
    let poster = []
    let photos = []
    let ids = []
    const imageRef = ref(storage, 'eventFlyers/')
    const getImages = () => {
        listAll(imageRef)
        .then((prefixesIds)=>{
            prefixesIds.prefixes.forEach((prefixes)=>{
                listAll(ref(storage, `eventFlyers/${prefixes.name}/poster`))
                .then((items)=>{
                    items.items.forEach((item)=>{
                        getDownloadURL(item)
                            .then((url)=>{
                                const photosId = prefixes.name
                                const image = url
                                poster.push({[photosId]:image})

                            })
                    })
                }).then(()=>{
                    listAll(ref(storage, `eventFlyers/${prefixes.name}/photos`))
                    .then((items)=>{
                        items.items.forEach((item)=>{
                            getDownloadURL(item)
                                .then((url)=>{
                                    const photosId = prefixes.name
                                    const image = {[photosId]:url}
                                    photos.push(image)
                                    const posterObj = {'poster': poster}
                                    const photosObj = {'photos': photos}
                                    // console.log([photosObj, posterObj]);
                                    getImageList([photosObj, posterObj])

                                })
                        })
                    })

                })
            })
        })
        // listAll(imageRef)
        //     .then((responses)=>{
        //         responses.prefixes.forEach((prefixs)=>{
        //             listAll(ref(storage, `eventFlyers/${prefixs.name}`))
        //             .then((prefix)=>{
        //                 prefix.prefixes.forEach((types)=>{
        //                     listAll(ref(storage, `eventFlyers/${prefixs.name}/${types.name}`))
        //                     .then((type)=>{
        //                         type.items.forEach((item)=>{
        //                             getDownloadURL(item).then((url)=>{
        //                                 const mediaType = types.name
        //                                 const photoName = url
        //                                 const eventImages = new Object({[mediaType]: photoName})
        //                                 images = images
        //                                 getImageList(eventImages)
        //                             })
        //                         })
        //                     })
        //                 })
        //             })
        //         })
        //     })

    }
    getImages()
}
