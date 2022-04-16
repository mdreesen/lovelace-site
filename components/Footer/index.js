import styles from '../../styles/Footer.module.css';

function Footer() {

    return (
            <div className={styles['footer']}>
                <div className={styles['footer-text']}>
                        <p className={styles['footer-left']}>Wild Beginnings Birth // (405) 501-9515 // doulabrianna@gmail.com</p>
                </div>
                <div className={styles['icon-right']}>
                    <div className={styles['icon-container-footer']}>
                        <div><a className={styles['icon']} href='https://www.facebook.com/wildbeginningsdoulacare' alt='Wild Beginnings Facebook icon'><i className="fab fa-facebook fa-2x" />facebook</a></div>
                        <div><a className={styles['icon']} href='https://www.instagram.com/doulabrianna/' alt='Wild beginnings instagram icon'><i className="fab fa-instagram fa-2x" />instagram</a></div>
                    </div>
                </div>
            </div>
    );
}

export default Footer;