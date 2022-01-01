import React, { Suspense } from 'react';
import { Parallax } from 'react-parallax';
import 'aos/dist/aos.css';
import './service.css';
import '../../fonts/fonts.css'

// import components
import Accordion from '../../components/Accordion';

// import pictures
import servicehero from '../../images/eibner-saliba-zhWUl24kf5A-unsplash.webp';

const Services = () => {

    return (
        <Suspense fallback={<div />}>
            <div>
                <div className='hero_section'>
                    <Parallax className="brianna-image" bgImage={servicehero} strength={200}></Parallax>
                    <div className='hero_title'>
                        <h1 className='services_title'>Services</h1>
                    </div>
                </div>
                <div className="service-text-container" data-aos="fade-in">
                    <p>From Childbirth to lactation support to baby wearing training,
                        I am here to educate and assist expecting and postpartum mothers
                        find care and assistance with perinatal services while respecting their autonomy.
                        Bundled packages are eligible for a discount. All services listed are available in-person, virtually or a combination of in-person and virtual visits for the same cost.</p>
                </div>
                <Accordion />
            </div>
        </Suspense>

    );
}

export default Services;