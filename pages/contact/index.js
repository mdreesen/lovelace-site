import Head from 'next/head';

import Hero from '../../components/Hero';

import styles from '../../styles/Contact.module.css';

export default function About() {
    return (
        <div>
            <Head>
                <title>Contact | Wild Beginnings</title>
                <meta name="description" content="Contact Wild Beginnings" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero heroImage='contact' title='Contact' alt='Womans belly bump, contact hero' />

            <section className={styles['contact-content-container']}>
                    <div className={styles['contact-text-container']}>
                        <p>Feel free to find us on Facebook or Instagram to get to know us a little more.
                        If you feel Wild Beginnings Birth might be a good fit to serve your growing family,
                        please don't hesitate to connect, ask questions, or schedule a consultation.
                    Thank you, and we look forward to connecting with you!</p>
                    </div>
                    <div className={styles['icon-container']}>
                        <div className={styles['info']}><a className={styles['icon']} href='tel:+1-405.501.9515'><i className="fas fa-mobile-alt fa-2x" /></a><span className='icon_detail'>405.501.9515</span></div>
                        <div className={styles['info']}><a className={styles['icon']} href="mailto: doulabrianna@gmail.com"><i className="far fa-envelope fa-2x" /></a><span className='icon_detail'>doulabrianna@gmail.com</span></div>
                        <div className={styles['info']}><a className={styles['icon']} href='https://www.facebook.com/wildbeginningsdoulacare'><i className="fab fa-facebook fa-2x" /></a><span className='icon_detail'>Wild Beginnings Birth</span></div>
                        <div className={styles['info']}><a className={styles['icon']} href='https://www.instagram.com/doulabrianna/'><i className="fab fa-instagram fa-2x" /></a><span className='icon_detail'>@doulabrianna</span></div>
                    </div>
                </section>
        </div>
    );
}