import React, { useEffect, useRef } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
export default function PrimaryPopup(props) {
  const modalRef = useRef(null)
  useEffect(() => {
    if (props.isOpen) modalRef.current.showModal();
  }, [props.isOpen])
  
  const closeModal = (e) => {
    modalRef.current.close();
    props.isClosed()
  }
  const cancelModal = (e) => {
    modalRef.current.close();
  }
  const handleClick = (e) => {
    if (e.target === modalRef.current) {
      modalRef.current.close();
    }
  }
  return (
    <dialog className='popup | position-center pg-2' onClick={(e) => {handleClick(e) }} ref={modalRef}>
        <AiOutlineClose className='flex-js-e' onClick={(e) => { cancelModal() } } />
        <div className='flow-3'>
            <h1>{props.prompt}</h1> 
            <button className='button secondary-button' onClick={(e) => { closeModal() }}>Delete</button>
        </div>
    </dialog>
    
  )
}
