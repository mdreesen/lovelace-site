import Head from 'next/head';

import Hero from '../../components/Hero';

import styles from '../../styles/About.module.css';

export default function About() {

    const titleArr = [
        'Doula Certificate',
        'Lactation Specialist Certificate',
        'Baby Wearing Educator Certificate',
        'Placenta Specialist Certificate'
    ];

    return (
        <div>
            <Head>
                <title>About | Wild Beginnings</title>
                <meta name="description" content="Meet Wild Beginnings family" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero heroImage='briannaTwo' title='About' alt='Wild Beginnings founder, Brianna' />

            <section className={styles['about-section-two']}>
                <div className={styles['about-text-container']}>
                    <div className={styles['about-para-container']}>
                        <h3 className={styles['brianna-name-title']}>Hello, I’m Brianna Lovelace!</h3>
                        <div className={styles['qualification-container']}>
                            {
                                titleArr.map(title => <h4 className={styles['qualification']} key={`about-title-${title}`}>{title}</h4>)
                            }
                        </div>

                        <p className={styles['about-text-one']}>I have a heart to support birthing and postpartum mothers.
                            After marrying my highschool sweetheart, earning my Bachleor’s degree in psychology and becoming pregnant
                            with our first child, I became interested in becoming a doula.
                            I later trained at the Indie Birth Association, which emphasizes autonomous and natural birthing practices,
                            as well as Uzazi Village, which prioritizes birth assistance for black and brown families.
                            These Associations have given me unique experiences to better serve families.
                            I’m so grateful for my supportive husband, with whom I now have 3 young children,
                            for encouraging me to pursue my dreams. In my free time I love to spend time with my family,
                            homeschool my children, go to church with my family, read the Word, work on handcrafts, garden,
                            explore the outdoors (kids and dirt were made for each other!) and continue my birth work education
                            to become a midwife one day.</p>

                        <p className={styles['about-text-two']}>When I was pregnant with my oldest,
                            I was fortunate to have a doula support me through his birth. She was even able to be there in the hospital with me,
                            where literally everything went according to plan. Not everyone has that experience, but I am grateful she was there to guide
                            the process and advocate for me. For my second birth, I decided I needed to freebirth and I had my baby at home with my husband.
                            I had a great experience at home and went on to birth the same way for my third baby.</p>

                        <p className={styles['about-text-three']}>It was after I had my second child that I finally decided to step out and become a doula.
                            I see that our natural-minded, freebirth & BIPOC communities needed more birthing support during this amazing season of pregnancy.
                            Black women have a higher c-section rate and both women and their babies have a much higher mortality when not using a doula for support.
                            I want to help influence those positive outcomes and support mothers and fathers through the process.</p>

                        <p className={styles['about-text-four']}>I can’t wait to learn more about you!
                            Please reach out to schedule a free consultation so
                            that we can better get to know each other & see if we might be a good fit.</p>
                        <div className="family-image-container">
                            {/* <img alt="family" className="family-image" src={familyImage}></img> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}