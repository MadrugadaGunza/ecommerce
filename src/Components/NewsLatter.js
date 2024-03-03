//styles
import styles from './NewsLatter.module.css';
import React from 'react'

const NewsLatter = () => {
    return (
        <div className={styles.newslatter}>
            <h1>Find Your Ideal Shoe</h1>
            <form className={styles.form}>
                <input type="text" placeholder='Search more' />
                <button className='backgroundBtn'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLatter