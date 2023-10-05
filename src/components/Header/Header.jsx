import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        // <nav >
        //     <Link style={{padding:'5px'}} to="/">home</Link>
        //     <Link style={{padding:'5px'}} to="/friends">Friends</Link>
        //     <Link style={{padding:'5px'}} to='/about'>About</Link>
        //     <Link style={{padding:'5px'}} to='/contacts'>Contacts</Link>
        //     <Link style={{padding:'5px'}} to='/login'>login</Link>
        // </nav>
          <nav>
            <NavLink to="/" className={({ isActive}) => isActive? "active": "",'common'}>Home</NavLink>
            <NavLink to='/friends' className={({ isActive}) => isActive? "active": "",'common'}>Friends</NavLink>
            <NavLink to='/about' className={({ isActive}) => isActive? "active": "",'common'}>About</NavLink>
            <NavLink to='/contacts' className={({ isActive}) => isActive? "active": "",'common'}>Contacts</NavLink>
            <NavLink to='/login' className={({ isActive}) => isActive? "active": "",'common'}>Login</NavLink>
        
          </nav>
    );
};

export default Header;