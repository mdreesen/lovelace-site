import React from 'react';
import './hero.css';

const Hero = (props) => {
    return (
        <div className='hero_title'>
            <div class="title_container">
                <h1 className='title'>{props.title}</h1>
            </div>
        </div>
    );
}

export default Hero;