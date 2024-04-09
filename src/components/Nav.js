import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import searchIcon from '../images/searchIcon.svg'
import profileIcon from '../images/profileIcon.svg'
import menu from '../images/menu.svg'
import close from '../images/close.svg'
import facebook1 from '../images/facebook1.svg'
import instagram1 from '../images/instagram1.svg'
import whatsapp1 from '../images/whatsapp1.svg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import {useNavigate , Link, useLocation} from 'react-router-dom'
import IsSignedIn from './IsSignedIn'


export default function Nav(props) {
  const [hideMenu, setHideMenu] = useState('')
  const [count, setCount] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [isAuth, setIsAuth] = useState(null)
  const dropdown = count ? 'active-dropdown' : '' 
  const [bgColor, setBgColor] = useState('#2D5873')

  const navigate = useNavigate()
  const location = useLocation()
  
    useEffect(() => {
      IsSignedIn(setIsAuth)
    }, [isAuth])

    useEffect(() => {
      if (location.pathname === '/') {
        setBgColor('')
      }else{
        setBgColor('#2D5873')
      }
    }, [location])
    
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
    <nav className='nav' style={{background: bgColor}}>
      <div className="nav-wrapper | space-between container flex-jc-sb">
        <a href='/' className="logo flex-al-c">
          <img src={logo} alt="Logo" />
        </a>
        <ul datatype-nav={hideMenu} className="nav-links-wrapper | clr-dark-300">
          <img onClick={() => { toggleNav(1) }} className={`close-button button | icon-button flex-js-e `} src={close} alt="" />
          <div className='nav-links flow-8 pg-block-14'>
            <li className="link"><a href="/events-page">All events</a></li>
            <li className="link"><a href="/events-page">Hot Events</a></li>
            <li className="link"><a href="/#">Top Locations</a></li>
            <li className="link"><a href="/events-page">Get Tickets</a></li>
            <li className="link"><a href="/#">About Us</a></li>
          </div>
          <div className="nav-footer | even-columns">
              <div className="socials | flow-2">
                <h3 className="secondary-header | clr-dark-300 ">
                    Socials
                </h3>
                <ul className="social-links | flex-al-c gap-0">
                  <li><img src={instagram1} alt="instagram" /></li>
                  <li><img src={facebook1} alt="facebook" /></li>
                  <li><img src={whatsapp1} alt="whatsapp" /></li>
                </ul>
              </div>
              <div className="contact | flow-2">
                <h3 className="secondary-header | clr-dark-300">
                  Contact
                </h3>
                <ul className="social-links flow-2">
                  <li>
                    <label htmlFor="tel">Tel:</label>
                    <br />
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
        <div className="right-nav | flex-al-c gap-1">
          {/* <button className="button | secondary-button">Contact Us</button> */}
          <button className="button | icon-button"><img src={searchIcon} alt="search" /></button>
          <div className='dropdown-button-wrapper'>
            <img onClick={toggleDropdown} className="button | icon-button dropdown-button" src={profileIcon} alt="profile" />
            <div onClick={(e) => { setCount(false) }} className={`dropdown-options ${dropdown}`}>
              {
                isAuth?
                <div>
                  {
                  isAuth?.displayName === 'admin' ?
                  <div>
                    <Link className='dropdown' to='/admin'><button className='button dropdown'>Admin</button></Link>
                    <button onClick={(e) => { logout() } } className='button dropdown'>Logout</button>
                  </div>
                  :
                  <button onClick={(e) => { logout() } } className='button dropdown'>Logout</button>
                  }
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
