import React from 'react'
import promoteImg from '../images/promoteImg.svg'
import { Link } from 'react-router-dom'
import Loading from './Loading'

export default function PromoteCta(props) {
  return (
    <section className="promote-cta | page-block-padding" style={{background: props.color}}>
        <div className="promote-cta-wrapper | page-inline-padding space-between vertical-align">
            <div className="left-cta">
                <h2 className="primary-header">
                    Want to promote an event?
                </h2>
                    <Link className="primary-button button" to={'/login'}>
                        Promote Event
                    </Link>
                <p>or <br /> Call us at <a href="tel:+850-555-5555">850-555-5555</a></p>
            </div>
            <div className="right-cta">
                <div className="cta-img-cont">
                    <img src={promoteImg} alt="cta" className="cta-img" />  
                </div>
            </div>
        </div>
    </section>
  )
}
