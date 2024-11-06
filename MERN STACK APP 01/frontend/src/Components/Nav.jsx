import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav style={styles.nav}>
            <h2 style={styles.logo}>Product CRUD</h2>
            <ul style={styles.navLinks}>
                <li>
                    <Link to="/" style={styles.link}>Product List</Link>
                </li>
                <li>
                    <Link to="/add" style={styles.link}>Add Product</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: '#333',
        color: '#fff'
    },
    logo: {
        margin: 0
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '1rem'
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    }
};

export default Nav;
