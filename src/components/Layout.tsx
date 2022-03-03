import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/Layout.module.scss';

const Layout = ( props : { children : React.ReactNode } ) => {
    return(
        <div>
            <header className={styles.header}>
                <LeftTabNavigator />
            </header>
            <main className={styles.container}>
                { props.children }
            </main>
            <footer>

            </footer>
        </div>
    );
}

const LeftTabNavigator = () => {
    return(
        <div className={styles.tab_navigator}>
            <SignIn />
            <Menu />
        </div>
    );
}

const SignIn = () => {
    return(
        <div className={styles.profile}>
            <Link to='/SignIn' className={styles.profile_signin}>
                <span>로그인</span>
            </Link>
        </div>
    );
}

const Menu = () => {
    return(
        <nav className={styles.menu}>
            <ul>
                <li className={styles.menu_item}>
                    <Link to='/' className={styles.menu_item_link}>
                        <span>Home</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Layout;

