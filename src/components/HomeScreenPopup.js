import React, { useEffect, useRef } from 'react'
import close from '../images/close.svg'

export default function HomeScreenPopup(props) {
    const modalRef = useRef()
    useEffect(() => {
        if (props.isOpen) modalRef.current.showModal();
    }, [props.isOpen])
    
    function closeModal(e) {
        props.isClosed(false)
        modalRef.current.close()
    }
    function handleButtonClick(e) {
        props.isClosed(true)
        modalRef.current.close()
    }
    function handleClick(e) {
        if (e.target === modalRef.current) {
         closeModal()
        }
    }
  return (
    <dialog className='home-screen-popup | container pg-block-4' onClick={(e) => { handleClick(e) }} ref={modalRef}>
        <div className='flex-jc-e'>
            <button onClick={(e) => { closeModal(e) }} className='button'> <img src={close} alt="" /> </button>
        </div>
        <div className="home-screen-popup-wrapper | flow-10">
            {props.content}
            <button onClick={(e) => { handleButtonClick() }} datatype-button='secondary' className="button | full-width ">{props.buttonPrompt}</button>
        </div>
    </dialog>
  )
}
