import { Parallax } from 'react-parallax';
import styles from '../../styles/Hero.module.css';

export default function Hero(props) {

    return (
        <section className={styles['hero_section']}>
            <Parallax className={styles['react-parallax'] || styles['react-parallax-bgimage']} bgImage={`/images/${props.heroImage}.webp`} alt={props.alt} strength={200}></Parallax>
            <div className={styles['hero_title']}>
                <div className={styles['title_container']}>
                    <h1 className={styles['title']}>{props.title}</h1>
                </div>
            </div>
        </section>
    );
}