import React from 'react'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import PromoteCta from '../components/PromoteCta'
import AllEvents from '../components/AllEvents'
import HomeScreenPopup from '../components/HomeScreenPopup'

export default function HomePage() {
  return (
    <main>
        <Hero />
        <div className='position-center'>
        <HomeScreenPopup />

        </div>
        <Testimonials />
        <AllEvents eventAmount={4} eventStyle='hot-event-style' FlyersType='Hot'/>
        <PromoteCta color='#F28080' />
        <AllEvents eventAmount={8} eventStyle='all-event-style' FlyersType='All' />
        <PromoteCta />        
    </main>
  )
}
