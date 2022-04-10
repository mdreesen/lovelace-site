import { Parallax } from 'react-parallax';
import Image from 'next/image'
import styles from '../../styles/HeroHome.module.css';

export default function HeroHome(props) {

    return (
        <section className={styles['hero-home_section']}>
            <div className={styles['image-wrapper-home']}>
                <div className={styles['homepage-logo_container']}>
                    <Image
                        className={styles['homepage-logo']}
                        src="/images/logo.webp"
                        alt="Wild Beginnings Logo"
                        width={823}
                        height={881}
                    />
                </div>
                <Parallax className={styles['react-parallax']} bgImage={`/images/${props.heroImage}.webp`} alt={props.alt} strength={200}></Parallax>
            </div>
        </section>
    );
}