import React, { Suspense } from 'react';
import { Parallax } from 'react-parallax';
import 'aos/dist/aos.css';
import './home.css';

// import pictures
import logoImage from '../../images/logo.webp';
import heroimg from '../../images/andre-adjahoe-tqunk3qB_yU-unsplash.webp';

function Home() {
    return (
        <Suspense fallback={<div />}>
            <div>
                <div className="homepage">
                    <section className="section-one">
                        <div className="image-wrapper-home">
                                <img alt="logo wild beginnings" className="homepage-logo" src={logoImage}></img>
                            <Parallax bgImage={heroimg} strength={200}>
                            </Parallax>
                        </div>
                    </section>

                    {/* <div className="divider"></div> */}
                    <section className="section-two" data-aos="fade-in">
                        <div className="homepage-statement-container">
                            <p className="homepage-statement">The beginning of new life can be a wild time.
                                Here at Wild Beginnings Birth we aim to support your family throughout pregnancy,
                                labor and postpartum in a way that is unique to your family’s needs.
                                We know (and science agrees!) that doulas are an important part of the birth team.
                                Having a doula is statistically proven to improve birth outcomes.
                                We know that mothers who continuously use a doula have a higher chance of a spontaneous
                                vaginal birth and are less likely to have pain medication, less likely to have instrumental assisted births,
                                and less likely to have negative feelings about birth. With this in mind, we come ready to help
                                families educate and advocate for themselves on this amazing journey.</p>
                        </div>
                    </section>
                </div>
            </div>
        </Suspense>

    );
}

export default Home;