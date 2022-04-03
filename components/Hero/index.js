import { Parallax } from 'react-parallax';
import styles from '../../styles/Hero.module.css';

export default function Hero(props) {

    return (
        <section className={styles.container}>
            <Parallax className={styles.reactParallaxBgImage} bgImage={`/images/${props.heroImage}.webp`} alt={props.alt} strength={200}></Parallax>
            <div className='hero_title'>
                <div className="title_container">
                    <h1 className='title'>{props.title}</h1>
                </div>
            </div>
        </section>
    );
}