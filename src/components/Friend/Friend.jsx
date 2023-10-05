import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {k, friend}=props;
    const navigate=useNavigate()

    const handlarDetails=()=>{
        navigate(`/friends/${k}`)
    }

    return (
        <div style={{padding:'3px',backgroundColor: 'tomato', borderRadius:'4px', margin: '10px'}}>
            <Link  to={`/friends/${k}`}>{friend}</Link>
            <div> <button onClick={handlarDetails}>details</button></div>
        </div>
    );
};

export default Friend;