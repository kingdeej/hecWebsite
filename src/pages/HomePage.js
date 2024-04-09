import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import PromoteCta from '../components/PromoteCta'
import AllEvents from '../components/AllEvents'
import HomeScreenPopup from '../components/HomeScreenPopup'

export default function HomePage() {
  const [bodyStyle, setBodyStyle] = useState(false)
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


  return (
    <main>
        <Hero />
        <div datatype-display={bodyStyle ? 'true' : 'false'} className='home-screen-popup-container'>
          <HomeScreenPopup setBodyStyle={setBodyStyle} />
        </div>
        <AllEvents eventAmount={4} eventStyle='hot-event-style' FlyersType='Hot'/>
        <PromoteCta color='#F28080' />
        <Testimonials />
        <AllEvents eventAmount={8} eventStyle='all-event-style' FlyersType='All' />
        <PromoteCta />        
    </main>
  )
}
