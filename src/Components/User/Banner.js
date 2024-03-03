//styles
import styles from './Banner.module.css';
// dependencies
import React from 'react';
// images
import Equipa from './../../Assets/equipa-removebg.png';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div>
                <h1>Nossa Equipa</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris at nulla eget lorem tempus commodo.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris at nulla eget lorem tempus commodo.
                </p>
            </div>
            <img src={Equipa} alt='equipa-removebg' />
        </div>
    )
}

export default Banner