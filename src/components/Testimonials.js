import React from 'react'

export default function Testimonials() {
  return (
    <section className="testimonials">
        <div className="testimonials-wrapper">
            <h2 className="primary-header">
                What our clients say
            </h2>
            <ul className="header-buttons">
                <li><button>Testimonials</button></li>
                <li><button>Questions</button></li>
            </ul>
            <ul className="testimonials-card-wrapper">
                <li className="testimonial-card">
                    <h3 className='testimonial-card-header'>"</h3>
                    <p className='testimonial-card-paragraph'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                    <div className="testimonial-profile">
                        <div className="profile-picture"><img src="" alt="profile" /></div>
                        <p className="profile-name">Jason Brown</p>
                    </div>
                </li>
                <li className="testimonial-card">
                    <h3 className='testimonial-card-header'>"</h3>
                    <p className='testimonial-card-paragraph'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                    <div className="testimonial-profile">
                        <div className="profile-picture"><img src="" alt="profile" /></div>
                        <p className="profile-name">Jason Brown</p>
                    </div>
                </li>
                <li className="testimonial-card">
                    <h3 className='testimonial-card-header'>"</h3>
                    <p className='testimonial-card-paragraph'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                    <div className="testimonial-profile">
                        <div className="profile-picture"><img src="" alt="profile" /></div>
                        <p className="profile-name">Jason Brown</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
