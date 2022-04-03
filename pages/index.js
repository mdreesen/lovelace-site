import Head from 'next/head'
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Wild Beginnings</title>
        <meta name="Wild Beginnings" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className={styles.main}>
        <Hero heroImage='homePage' alt='Wild Beginnings founder, Brianna'/>
        <section className="section-two">
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
      </main>
    </div>
  )
}