import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import PromoteCta from '../components/PromoteCta'
import AllEvents from '../components/AllEvents'
import HomeScreenPopup from '../components/HomeScreenPopup'

export default function HomePage() {
  const [bodyStyle, setBodyStyle] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const popup = sessionStorage.getItem('popup')
  useEffect(() => {
    if (!popup) {
      setTimeout(() => {
        setBodyStyle(true)
      }, 2000);
      sessionStorage.setItem('popup', 'true')
    }else{
      if (bodyStyle) {
        document.body.style.overflowY = "hidden";
      }
      else{
          document.body.style.overflowY = "scroll"
      }
    }
}, [popup, bodyStyle]);

  const content = (         
    <div className='flow-10'>
      <div className="heading-wrapper | mx-auto text-center">
          <h1 className="primary-wrapper | clr-accent-400 fs-500">Welcome to H.E.C</h1>
          <div className="divider | mg-block-1"></div>
          <p className='clr-primary-300 fs-100'>Harnessing.Entertaining.Concepts</p>
      </div>
      <p className="body-paragraph | fs-400 clr-dark-300">
          Discover, connect, and experience with us. From electrifying parties to gatherings to sporting events, we're your go-to platform for finding and exploring events that matter. Our user-friendly interface makes it easy to browse and book tickets for your next adventure. Join us and turn ordinary days into extraordinary experiences. Welcome to H.E.C.
      </p>
    </div>
  )
  function isClosed(e) {
    setIsOpen(false)
    setBodyStyle(false)
  }
  return (
    <main>
        <Hero />
          <HomeScreenPopup content={content} setBodyStyle={setBodyStyle} isOpen={isOpen} isClosed={isClosed} buttonPrompt='explore'/>
        {/* <div datatype-display={bodyStyle ? 'true' : 'false'} className='home-screen-popup-container'>
        </div> */}
        <AllEvents eventAmount={4} eventStyle='hot-event-style' FlyersType='Hot'/>
        <PromoteCta color='#F28080' />
        <Testimonials />
        <AllEvents eventAmount={8} eventStyle='all-event-style' FlyersType='All' />
        <PromoteCta />        
    </main>
  )
}
