import Head from 'next/head';

import Hero from '../../components/Hero';
import Accordion from '../../components/Accordion';

import styles from '../../styles/Services.module.css';

export default function About() {
    return (
        <div>
            <Head>
                <title>Services | Wild Beginnings</title>
                <meta name="description" content="Services of Wild Beginnings" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero heroImage='services' title='Services' alt='Woman breast feeding, services hero' />

            <section>
            <div className={styles['service-text-container']}>
                    <p>From Childbirth to lactation support to baby wearing training,
                        I am here to educate and assist expecting and postpartum mothers
                        find care and assistance with perinatal services while respecting their autonomy.
                        Bundled packages are eligible for a discount. All services listed are available in-person, virtually or a combination of in-person and virtual visits for the same cost.</p>
                </div>
                <Accordion />
            </section>
        </div>
    );
}