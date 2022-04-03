import Head from 'next/head';

import Hero from '../../components/Hero';

export default function About() {
    return (
        <div>
            <Head>
                <title>About Wild Beginnings</title>
            </Head>
            <section>
                <Hero heroImage='briannaTwo' title='About' alt='Wild Beginnings founder, Brianna' />
            </section>
        </div>
    );
}