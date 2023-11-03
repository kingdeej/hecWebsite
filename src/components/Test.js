import React, { useEffect, useState } from 'react'
import { storage } from '../firebase/firebase'
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

export default function Test() {
    const [image, setImage] = useState(null)
    const [imageList, setImageList] = useState([])
    const ImageListRef = ref(storage, 'eventFlyers')
    const handleChange = (e) => { 
        setImage(e.target.files[0])
    }
    const onSendImage = (e) => { 
        if (image === null ) return;
        const imageRef = ref(storage, `eventFlyers/${image.name + v4()}`)
        uploadBytes(imageRef, image).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((url)=>{
                setImageList((prev)=>[...prev, url])
            })
        })
     }
     useEffect(() => {
        listAll(ImageListRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev, url])
                })
            })
        })
     }, [])
     
  return (
    <div className='page-block-padding page-inline-padding'>
        <h1 className="primary-header">Test</h1>
        <input onChange={(e) => { handleChange(e) }} type="file" accept="image/png, image/jpeg" name="" id="" />
        <button onClick={onSendImage}>Send Image</button>
        {imageList.map((x, key)=>{
            return <img key={key} src={x} alt="" />
        })}
    </div>
  )
}
