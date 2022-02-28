import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Layout.scss';

const Layout = ( props : { children : React.ReactNode } ) => {
    return(
        <div>
            <header className='header'>
                <LeftTabNavigator />
            </header>
            <main className='container'>
                { props.children }
            </main>
            <footer>

            </footer>
        </div>
    );
}

const LeftTabNavigator = () => {
    return(
        <div className='tab_navigator'>
            <SignIn />
            <Menu />
        </div>
    );
}

const SignIn = () => {
    return(
        <div className='profile'>
            <Link to='/SignIn' className='profile_signin'>
                <span>로그인</span>
            </Link>
        </div>
    );
}

const Menu = () => {
    return(
        <nav className='menu'>
            <ul>
                <li className='menu_item'>
                    <Link to='/' className='menu_item_link'>
                        <span>Home</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Layout;

