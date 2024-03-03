//styles
import styles from './Banner.module.css';
import React from 'react';
import Tenis from './../Assets/tenis.png';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <section className={styles.texto}>
                <h1>Nike Blue Queen <br /> <span>50%</span> Off</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris at nulla eget lorem tempus commodo.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris at nulla eget lorem tempus commodo.
                </p>
                <div>
                    <button className={`${styles.btn} backgroundBtn`}>Shop Now</button>

                    <button className={styles.btn}>Learn More</button>
                </div>
            </section>
            <img src={Tenis} alt="tenis" className={styles.tenis} />
        </div>
    )
}

export default Banner