import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav >
            <Link style={{padding:'5px'}} to="/">home</Link>
            <Link style={{padding:'5px'}} to="/friends">Friends</Link>
            <Link style={{padding:'5px'}} to='/about'>About</Link>
            <Link style={{padding:'5px'}} to='/contacts'>Contacts</Link>
            <Link style={{padding:'5px'}} to='/login'>login</Link>
        </nav>
    );
};

export default Header;