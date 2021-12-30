import React, { Suspense } from 'react';
import './footer.css';

function Footer() {

    return (
        <Suspense fallback={<div/>}>
            <div className="footer position-static">
                {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
                <div className="footer-text">
                        <p className="footer-left">Wild Beginnings Birth // (405) 501-9515 // doulabrianna@gmail.com</p>

                </div>
                <div className="icon-right">
                    <ul className="icon-container-footer">
                        <div><a href='https://www.facebook.com/wildbeginningsdoulacare'><i className="fab fa-facebook fa-2x" /></a></div>
                        <div><a href='https://www.instagram.com/doulabrianna/'><i className="fab fa-instagram fa-2x" /></a></div>
                    </ul>
                </div>
            </div>
        </Suspense>
    );
}

export default Footer;