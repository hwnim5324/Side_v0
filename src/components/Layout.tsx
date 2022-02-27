import React from 'react';
import { Link } from "react-router-dom";

const Layout = ( props : { children : React.ReactNode } ) => {
    return(
        <div>
            <header>
                <Menu />
            </header>
            <div className='container'>
                { props.children }
            </div>
            <footer>

            </footer>
        </div>
    );
}

const Menu = () => {
    return(
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/SignIn'>SignIn</Link></li>
        </ul>
    );
}


export default Layout;

