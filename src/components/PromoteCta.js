import React from 'react'

export default function PromoteCta() {
  return (
    <section className="promote-cta">
        <div className="promote-cta-wrapper">
            <div className="left-cta">
                <h2 className="primary-header">
                    Want to promote an event?
                </h2>
                <button className="promote-button">
                    Promote Event
                </button>
                <p>or <br /> Call us at <a href="tel:+850-555-5555">850-555-5555</a></p>
            </div>
            <div className="right-cta">
                <div className="cta-img-cont">
                    <img src="" alt="cta" className="cta-img" />  
                </div>
            </div>
        </div>
    </section>
  )
}
