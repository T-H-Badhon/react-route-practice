import React from 'react';
import { Link, NavLink, useNavigation } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const navigation= useNavigation();
    return (
        // <nav >
        //     <Link style={{padding:'5px'}} to="/">home</Link>
        //     <Link style={{padding:'5px'}} to="/friends">Friends</Link>
        //     <Link style={{padding:'5px'}} to='/about'>About</Link>
        //     <Link style={{padding:'5px'}} to='/contacts'>Contacts</Link>
        //     <Link style={{padding:'5px'}} to='/login'>login</Link>
        // </nav>
          <div>
            <div>
            <nav>
              
              <NavLink to="/" className={({ isActive}) => isActive? "active": "",'common'}>Home</NavLink>
              <NavLink to='/friends' className={({ isActive}) => isActive? "active": "",'common'}>Friends</NavLink>
              <NavLink to='/about' className={({ isActive}) => isActive? "active": "",'common'}>About</NavLink>
              <NavLink to='/contacts' className={({ isActive}) => isActive? "active": "",'common'}>Contacts</NavLink>
              <NavLink to='/login' className={({ isActive}) => isActive? "active": "",'common'}>Login</NavLink>
          
            </nav>
          </div>
            <h4>{navigation.state=== 'loading'? 'loading':'done'}</h4>
          </div>
    );
};

export default Header;