// styles
import styles from './Card.module.css';
import React from 'react'

const Card = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <h2 className="truncate" title={product.title}>{product.title}</h2>
                <p>$ {product.price}</p>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.right}>
                <div className={styles.barra}></div>
                <h2>New Product</h2>
                <p>{product.description}</p>
                <h4>In Stock</h4>
                <div style={{ marginTop: '.5rem' }}>
                    <button className='backgroundBtn btn'>Add to Cart</button>
                    <button className='btn'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card