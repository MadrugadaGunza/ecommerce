//style
import styles from './Header.module.css';
//dependencies
import React from 'react';
//images
import Logo from './../Assets/Nike-logo.png';
import Cart from './../Assets/cart-icon-png.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to='/'>
                    <img src={Logo} alt='logo' className={styles.logo} />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link>Sobre</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link to='/clients'>Clientes</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link>Blog</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link>Contacto</Link>
                    </li>
                </ul>
                <div className={styles.botoes}>
                    <img src={Cart} alt='cart' className={styles.cart} />
                </div>
            </nav>
        </header>
    )
}

export default Header