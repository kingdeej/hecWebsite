import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import HotEvents from '../components/HotEvents'
import PromoteCta from '../components/PromoteCta'
import AllEvents from '../components/AllEvents'

export default function HomePage() {
  return (
    <main>
        <Nav />
        <Hero />
        <Testimonials />
        <HotEvents />
        <PromoteCta />
        <AllEvents />
        <PromoteCta />
        <Footer />
        
    </main>
  )
}
