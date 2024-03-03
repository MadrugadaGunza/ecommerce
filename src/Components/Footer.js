//styles
import styles from './Footer.module.css';
//dependencies
import React from 'react';
// images
import Logo from './../Assets/Nike-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Link to='/'>
                    <img src={Logo} alt='log' />
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, veritatis.</p>
            </div>
            <div>
                <ul>
                    <li><h4>Links</h4></li>
                    <li><Link to='/'>Home</Link></li>
                    <li>Sobre</li>
                    <li><Link to='/clients'>Clientes</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><h4>Clients</h4></li>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Clientes</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><h4>Shop</h4></li>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Clientes</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><h4>Redes</h4></li>
                    <li>+244 935990951</li>
                    <li>madrugadaoca@gmail.com</li>
                    <li>madrugadacarvalho.com.ao</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer