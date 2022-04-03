import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image'
import styles from '../../styles/Hero.module.css';

export default function Hero(props) {

    return (
        <section className={styles.container}>
            <Parallax speed={5}>
                <Image
                    src={`/images/${props.heroImage}.webp`}
                    alt={`${props.alt}`}
                    width={props.width}
                    height={props.height}
                />
            </Parallax>
        </section>
    );
}