import React from 'react'
import promoteImg from '../images/promoteImg.svg'
import { Link } from 'react-router-dom'

export default function PromoteCta(props) {
  return (
    <section className="promote-cta | page-block-padding" style={{background: props.color}}>
        <div className="promote-cta-wrapper | container pg-block-9 flow-4 ">
            <div className="left-cta | mx-auto flow-2 pg-block-end-2">
                <h2 className="primary-heading">
                    Want to promote an event?
                </h2>
                <Link className="primary-button button" to={'/login'}>
                    Promote Event
                </Link>
                <p>or</p>
                <p> Call us at <a href="tel:+850-555-5555">850-555-5555</a></p>
            </div>
            <div className="right-cta | flex-center">
                <div className="cta-img-cont">
                    <img src={promoteImg} alt="cta" className="cta-img" />  
                </div>
            </div>
        </div>
    </section>
  )
}
