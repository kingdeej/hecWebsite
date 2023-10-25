import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import PromoteCta from '../components/PromoteCta'
import AllEvents from '../components/AllEvents'

export default function HomePage() {
  return (
    <main>
        <Nav />
        <Hero />
        <Testimonials />
        <AllEvents eventAmount={4} eventStyle='hot-event-style' FlyersType='Hot'/>
        <PromoteCta color='#F28080' />
        <AllEvents eventAmount={8} eventStyle='all-event-style' FlyersType='All' />
        <PromoteCta />
        <Footer />
        
    </main>
  )
}
