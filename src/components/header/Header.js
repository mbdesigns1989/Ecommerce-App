import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';


const logo = (
    <div className={styles.logo}>
        <Link>
            <h2> e<span>Shop</span>. </h2>
        </Link>
    </div>
)

const Header = () => {

    return (
        <header>
            <div className={styles.header}>{logo}</div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                     </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                     </Link>
                    </li>
                </ul>
                <div className={styles["header-right"]}>
                    <span className={styles.links}>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/order-history">My Orders</Link>
                    </span>
                </div>
            </nav>

        </header>
    );
}

export default Header;