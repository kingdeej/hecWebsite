import React, { useState } from 'react'
import profileIcon from '../images/profileIcon.svg'

export default function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(1);

    const testimonials = [
        {
            id: 0,
            testimonialText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
            testimonialProfile: profileIcon,
            testimonialName: 'Jason Brown',
        },
        {
            id: 1,
            testimonialText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
            testimonialProfile: profileIcon,
            testimonialName: 'Jason Brown',
        },
        {
            id: 2,
            testimonialText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
            testimonialProfile: profileIcon,
            testimonialName: 'Jason Brown',
        },
    ]
    
  return (
    <section className="testimonials | page-block-padding">
        <div className="testimonials-wrapper | page-inline-padding">
            <h2 className="primary-header">
                What our clients say
            </h2>
            <ul className="header-buttons | flex">
                <li><button className='button'>Testimonials</button></li>
                <li><button className='button'>Questions</button></li>
            </ul>
            <ul className="testimonials-card-wrapper | flex">
                {testimonials.map((x, key)=>{
                    const active = activeTestimonial === key ? 'active-testimonial' : ''
                    return(
                    <li key={key}  className='testimonial-card'>
                        <div onClick={() => {setActiveTestimonial(key) }}  className= {`${active} testimonial-wrapper button`} >
                            <h3 className='testimonial-card-header'>''</h3>
                            <p className='testimonial-card-paragraph'>{x.testimonialText}</p>
                        </div>
                        <div className="testimonial-profile">
                            <div className="profile-picture"><img className='position-center' src={x.testimonialProfile} alt="profile" /></div>
                            <p className="profile-name">{x.testimonialName}</p>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}
