import { Parallax } from 'react-parallax';
import styles from '../../styles/Hero.module.css';

import { motion } from "framer-motion";

export default function Hero(props) {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <section className={styles['hero_section']}>
                <Parallax className={styles['react-parallax']} bgImage={`/images/${props.heroImage}.webp`} alt={props.alt} strength={200}></Parallax>
                <div className={styles['hero_title']}>
                    <div className={styles['title_container']}>
                        <h1 className={styles['title']}>{props.title}</h1>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}