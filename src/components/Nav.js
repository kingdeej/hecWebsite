import React, { useState } from 'react'
import logo from '../images/logo.svg'
import searchIcon from '../images/searchIcon.svg'
import profileIcon from '../images/profileIcon.svg'
import menu from '../images/menu.svg'
import close from '../images/close.svg'
import facebook1 from '../images/facebook1.svg'
import instagram1 from '../images/instagram1.svg'
import whatsapp1 from '../images/whatsapp1.svg'
import {Link} from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import {useNavigate} from 'react-router-dom'


export default function Nav(props) {
  const [hideMenu, setHideMenu] = useState('')
  const [count, setCount] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const dropdown = count ? 'active-dropdown' : '' 
  const navigate = useNavigate()

  function toggleNav(e) {
    if (e === 0) {
      setHideMenu('nav-active')
    }
    if (e === 1) {
      setHideMenu('')
    }
  }
  function toggleDropdown(e) {
    if (count) {
      setCount(false)
    }else{
      setCount(true)
    }
  }
  function logout() {
    setCount(false)
    signOut(auth)
    sessionStorage.removeItem('user')
    setRedirect(true)
  }
  if (redirect) {
    navigate('/')
    setRedirect(false)
  }
  return (
    <nav className='nav' style={{background: props.background}}>
      <div className="nav-wrapper | space-between page-inline-padding">
        <a href='/' className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <ul className={`nav-links-wrapper flex ${hideMenu}`}>
          <img onClick={() => { toggleNav(1) }} className={`close-button button | icon-button `} src={close} alt="" />
          <div className='nav-links | flex'>
            <li className="link"><a href="/eventsPage">All events</a></li>
            <li className="link"><a href="/eventsPage">Hot Events</a></li>
            <li className="link"><a href="/#">Top Locations</a></li>
            <li className="link"><a href="/eventsPage">Get Tickets</a></li>
            <li className="link"><a href="/#">About Us</a></li>
          </div>
          <div className="nav-footer | flex">
              <div className="socials">
                <h3 className="secondary-header ">
                    Socials
                </h3>
                <ul className="social-links | flex">
                  <li><img src={instagram1} alt="instagram" /></li>
                  <li><img src={facebook1} alt="facebook" /></li>
                  <li><img src={whatsapp1} alt="whatsapp" /></li>
                </ul>
              </div>
              <div className="contact">
                <h3 className="secondary-header">
                  Contact
                </h3>
                <ul className="social-links">
                  <li>
                    <label htmlFor="tel">Tel:</label>
                    <a href="tel:+850-555-5555">850-555-5555</a>
                  </li>
                  <li>
                    <label htmlFor="Email">Email:</label>
                    <p>hec@email.com</p>
                  </li>  
                </ul>
              </div>

          </div>
        </ul>
        <div className="right-nav | vertical-align">
          {/* <button className="button | secondary-button">Contact Us</button> */}
          <button className="button | icon-button"><img src={searchIcon} alt="search" /></button>
          <div className='dropdown-button-wrapper'>
            <img onClick={toggleDropdown} className="button | icon-button dropdown-button" src={profileIcon} alt="profile" />
            <div className={`dropdown-options ${dropdown}`}>
              {
                sessionStorage.getItem('user')?
                <div>
                  <Link className='dropdown' to='/admin-page'><button className='button'>Admin</button></Link>
                  <button onClick={logout} className='button dropdown'>Logout</button>
                </div>
                :
                <Link onClick={() => { setCount(false) }} className='dropdown' to='/login'><button className='button'>Sign In</button></Link>
              }
            </div>
          </div>
          <img onClick={() => { toggleNav(0) }} className={`menu-button button | icon-button`} src={menu} alt="" />
        </div>
      </div>
    </nav>
  )
}
