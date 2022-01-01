import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './accordion.css';

const ServiceAccordion = () => {

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>+ Birth Doula</Accordion.Header>
                <Accordion.Body>
                    Establishing client relationship and determining birthing preferences and the best ways I can support you and your family before, during and after birth, as well as educating your partner on your specific coping mechanisms and your preferred comfort measures. This package includes:
                    <br />
                    - 2 prenatal visits (up to 2 hours each visit)
                    <br />
                    - 1 postpartum visit (2 hours)
                    <br />
                    - Birth plan creation
                    <br />
                    - Unlimited labor support
                    <br />
                    - Continuous support and contact throughout pregnancy
                    <br />
                    - 24/7 on call support starting at 38 weeks
                    <br />
                    Starting at $850
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>+ Birth Doula & Photography</Accordion.Header>
                <Accordion.Body>
                    This is a special package in collaboration with GM Studios.
                    <br />
                    This package will include everything in my birth doula package and everything in GM Studios’ Honey Package.
                    <br />
                    You can see more info about her, her work and typical pricing at <a href='https://www.gmstudiosok.com'>https://www.gmstudiosok.com</a>
                    <br />
                    This package starts at $1300
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>+ Childbirth Education</Accordion.Header>
                <Accordion.Body>
                    These “labor blueprint” courses are designed for parents considering home birth, hospital birth, unmedicated birth, freebirth, or anyone curious about the physiological processes (internal processes) of labor.
                    <br />
                    - What is physiological birth
                    <br />
                    - Hormones of birth
                    <br />
                    - What undisturbed birth looks like
                    <br />
                    - Q&amp; A at the end of each class
                    <br />
                    Starting at $175  (available in group &amp; individual settings)
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>+ Lactation Education</Accordion.Header>
                <Accordion.Body>
                    It’s best to know how to breastfeed your baby before they’re here. This course is designed specifically for pregnant mothers and their partner to learn how to breastfeed and what is involved in the process. This no self-exposure course can be taken alone or with a partner.
                    <br />
                    - Proper latch techniques
                    <br />
                    - Newborn through toddlerhood breastfeeding
                    <br />
                    - Troubleshooting common issues
                    <br />
                    - When and how to seek further support
                    <br />
                    Starting at $100 (available in group and individuals settings)
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>+ Postpartum Lactation Support</Accordion.Header>
                <Accordion.Body>
                    This service provides assessment &amp; guidance or referrals for mothers needing lactation help. This is a starting point to evaluate what obstacles you and your child are encountering.
                    <br />
                    - Assessment
                    <br />
                    - Advice and hands-on help with positioning, latching and more
                    <br />
                    Starting at $40 per hour
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header>+ Babywearing Education</Accordion.Header>
                <Accordion.Body>
                    This intro to babywearing class, is for everyone - pregnant or postpartum, it will give parents, grandparents, caregivers, etc. knowledge and confidence on how to wear baby safely, comfortably, and practically - so you can wear baby anywhere you want.
                    <br />
                    - Different types of carriers
                    <br />
                    - Newborn through toddlerhood babywearing
                    <br />
                    - Babywearing safety
                    <br />
                    Starting at $60
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
                <Accordion.Header>+ Virtual Doula Office Hours</Accordion.Header>
                <Accordion.Body>
                    Pay What You Can, $25 suggested.
                    <br />
                    - 45 minute video call
                    <br />
                    - Question-focused meetings, no specific pre-research or follow up included, to keep the rate low and flexible
                    <br />
                    - Perfect for expecting mothers looking to complement their birth education or focus on a specific topic
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default ServiceAccordion;