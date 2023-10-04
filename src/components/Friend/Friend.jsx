import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {k, friend}=props;
    return (
        <div style={{padding:'3px',backgroundColor: 'tomato', borderRadius:'4px', margin: '10px'}}>
            <Link  to={`/friends/${k}`}>{friend}</Link>
        </div>
    );
};

export default Friend;