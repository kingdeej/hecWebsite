import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-wrapper">
        <div className="left-footer">
          <img src="" alt="" className="logo" />
          <p>Copyright 2023 <img src="" alt="" /></p>           
        </div>
        <div className="contact">
          <h3 className="secondary-header">
            Contact
          </h3>
          <ul className="contact">
          </ul>
            <li>
              <label htmlFor="tel">Tel:</label>
              <a href="tel:+850-555-5555">850-555-5555</a>
            </li>
            <li>
              <label htmlFor="Email">Email:</label>
              <p>hec@email.com</p>
            </li>  
        </div>
         <ul className="socials">
            <li><img src="" alt="instagram" /></li>
            <li><img src="" alt="facebook" /></li>
            <li><img src="" alt="whatsapp" /></li>
         </ul>
      </div>
    </footer>
  )
}
