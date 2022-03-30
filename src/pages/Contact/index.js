import React, { Suspense } from 'react';
import { Parallax } from 'react-parallax';
import 'aos/dist/aos.css';
import './contact.css';
import '../../fonts/fonts.css';

import Hero from '../../components/Hero';

// import image
import contactImage from '../../images/allison-wopata-4qt6g8Aabcw-unsplash.jpg';

const Contact = () => {
    return (
        <Suspense fallback={<div />}>
            <div>
            <div className='hero_section'>
                    <Parallax className="brianna-image" bgImage={contactImage} strength={200}></Parallax>
                    <Hero title="Contact" />
                </div>

                <div className="contact-content-container" data-aos="fade-in">
                    <div className="contact-text-container">
                        <p>Feel free to find us on Facebook or Instagram to get to know us a little more.
                        If you feel Wild Beginnings Birth might be a good fit to serve your growing family,
                        please don't hesitate to connect, ask questions, or schedule a consultation.
                    Thank you, and we look forward to connecting with you!</p>
                    </div>
                    <div className='icon-container'>
                        <div className='info'><a className='icon' href='tel:+1-405.501.9515'><i className="fas fa-mobile-alt fa-2x" /></a><span className='icon_detail'>405.501.9515</span></div>
                        <div className='info'><a className='icon' href="mailto: doulabrianna@gmail.com"><i className="far fa-envelope fa-2x" /></a><span className='icon_detail'>doulabrianna@gmail.com</span></div>
                        <div className='info'><a className='icon' href='https://www.facebook.com/wildbeginningsdoulacare'><i className="fab fa-facebook fa-2x" /></a><span className='icon_detail'>Wild Beginnings Birth</span></div>
                        <div className='info'><a className='icon' href='https://www.instagram.com/doulabrianna/'><i className="fab fa-instagram fa-2x" /></a><span className='icon_detail'>@doulabrianna</span></div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}

export default Contact;