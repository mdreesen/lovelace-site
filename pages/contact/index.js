import Head from 'next/head';
import Hero from '../../components/Hero';
import styles from '../../styles/Contact.module.css';

export default function About() {

    const paragraph = [
        'Feel free to find us on Facebook or Instagram to get to know us a little more. If you feel Wild Beginnings Birth might be a good fit to serve your growing family, please don\'t hesitate to connect, ask questions, or schedule a consultation. Thank you, and we look forward to connecting with you!',
    ];

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

                        {
                            paragraph.map((item, index) => <p key={`paragraph-${index}`}>{item}</p>)
                        }

                    </div>
                    <div className={styles['icon-container']}>
                        <div className={styles['info']}><a className={styles['icon']} href='tel:+1-405.501.9515' alt='Call Wild Beginnings on contact page'><svg className={styles['contact-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z" /></svg>405.501.9515</a></div>
                        <div className={styles['info']}><a className={styles['icon']} href="mailto: doulabrianna@gmail.com" alt='Email Wild Beginnings on contact page'><svg className={styles['contact-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" /></svg>doulabrianna@gmail.com</a></div>
                        <div className={styles['info']}><a className={styles['icon']} href='https://www.facebook.com/wildbeginningsdoulacare' alt='Facebook link on contact page'><svg className={styles['contact-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>Wild Beginnings Birth</a></div>
                        <div className={styles['info']}><a className={styles['icon']} href='https://www.instagram.com/doulabrianna/' alt='Instagram link on contact page'><svg className={styles['contact-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>@doulabrianna</a></div>
                    </div>
                </section>
        </div>
    );
}