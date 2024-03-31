import React from 'react'
import close from '../images/close.svg'

export default function HomeScreenPopup() {
  return (
    <div className='home-screen-popup | container bg-light-300 pg-block-2'>
        <div className='flex-jc-e'>
            <img className='mg-inline-end-6 mg-block-start-4 ' src={close} alt="" />
        </div>
        <div className="home-screen-popup-wrapper | flow-10 pg-7">
            <div className="heading-wrapper | mx-auto text-center">
                <h1 className="primary-wrapper | clr-accent-400">Welcome to H.E.C</h1>
                <div className="divider | mg-block-1"></div>
                <p className='clr-primary-300'>Harnessing.Entertaining.Concepts</p>
            </div>
            <p className="main | fs-400 clr-dark-300">
                Discover, connect, and experience with us. From electrifying parties to gatherings to sporting events, we're your go-to platform for finding and exploring events that matter. Our user-friendly interface makes it easy to browse and book tickets for your next adventure. Join us and turn ordinary days into extraordinary experiences. Welcome to H.E.C.
            </p>
            <button datatype-button='secondary' className="button | full-width ">Explore</button>
        </div>
    </div>
  )
}
