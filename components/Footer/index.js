import styles from '../../styles/Footer.module.css';

function Footer() {

    return (
            <div className={styles['footer']}>
                <div className={styles['footer-text']}>
                        <p className={styles['footer-left']}>Wild Beginnings Birth // (405) 501-9515 // doulabrianna@gmail.com</p>

                </div>
                <div className={styles['icon-right']}>
                    <ul className={styles['icon-container-footer']}>
                        <div><a href='https://www.facebook.com/wildbeginningsdoulacare'><i className="fab fa-facebook fa-2x" /></a></div>
                        <div><a href='https://www.instagram.com/doulabrianna/'><i className="fab fa-instagram fa-2x" /></a></div>
                    </ul>
                </div>
            </div>
    );
}

export default Footer;