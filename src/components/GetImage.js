import {ref, getDownloadURL, listAll} from 'firebase/storage'
import {storage} from '../firebase/firebase'
import { useState } from 'react'

export default function GetImage(getImageList) {
    const imageRef = ref(storage, 'eventFlyers/')
    const getImages = () => {
        listAll(imageRef)
            .then((responses)=>{
                responses.prefixes.forEach((prefixs)=>{
                    listAll(ref(storage, `eventFlyers/${prefixs.name}`))
                    .then((prefix)=>{
                        prefix.prefixes.forEach((types)=>{
                            listAll(ref(storage, `eventFlyers/${prefixs.name}/${types.name}`))
                            .then((type)=>{
                                type.items.forEach((item)=>{
                                    getDownloadURL(item).then((url)=>{
                                        const mediaType = types.name
                                        const photoName = url
                                        const eventImages = new Object({[mediaType]: photoName})
                                        getImageList(eventImages)
                                    })
                                })
                            })
    
                        })
                    })
                })
            })
    }
    getImages()
}
