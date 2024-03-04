import React, { useState } from 'react'
import logo from '../images/logo.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import whatsapp from '../images/whatsapp.svg'

export default function Footer() {
  return (
    <footer className='footer | section'>
      <div className="footer-wrapper | container  flex-jc-sb">
        <div className="left-footer | flex-column">
          <img src={logo} alt="logo" className="logo" />
          <p>Copyright 2023 <img src="" alt="" /></p>           
        </div>
        <div className="contact">
          <h3 className="secondary-header">
            Contacts
          </h3>
          <ul className="contact-list flex-column">
            <li className='flex-column'>
              <label htmlFor="tel">Tel:</label>
              <a className='secondary-a-tag' href="tel:+850-555-5555">850-555-5555</a>
            </li>
            <li className='flex-column'>
              <label htmlFor="Email">Email:</label>
              <p>hec@email.com</p>
            </li>  
          </ul>
        </div>
        <div className='social'>
          <h3 className="secondary-header">
            Socials
          </h3>
         <ul className="socials-list | flex">
            <li><a href="#"><img src={instagram} alt="instagram" /></a></li>
            <li><a href="#"></a><img src={facebook} alt="facebook" /></li>
            <li><a href="#"></a><img src={whatsapp} alt="whatsapp" /></li>
         </ul>
        </div>
      </div>
    </footer>
  )
}
