import React from 'react'
import close from '../images/close.svg'

export default function HomeScreenPopup(props) {
  return (
    <div className='home-screen-popup | container pg-block-4'>
        <div className='flex-jc-e'>
            <button onClick={(e) => { props.setBodyStyle(false) }} className='button'> <img src={close} alt="" /> </button>
        </div>
        <div className="home-screen-popup-wrapper | flow-10">
            <div className="heading-wrapper | mx-auto text-center">
                <h1 className="primary-wrapper | clr-accent-400 fs-500">Welcome to H.E.C</h1>
                <div className="divider | mg-block-1"></div>
                <p className='clr-primary-300 fs-100'>Harnessing.Entertaining.Concepts</p>
            </div>
            <p className="body-paragraph | fs-400 clr-dark-300">
                Discover, connect, and experience with us. From electrifying parties to gatherings to sporting events, we're your go-to platform for finding and exploring events that matter. Our user-friendly interface makes it easy to browse and book tickets for your next adventure. Join us and turn ordinary days into extraordinary experiences. Welcome to H.E.C.
            </p>
            <button onClick={(e) => { props.setBodyStyle(false) }} datatype-button='secondary' className="button | full-width ">Explore</button>
        </div>
    </div>
  )
}
