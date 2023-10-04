import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends=useLoaderData();
    return (
        <div>
            {
                friends.map(friend=> <Friend key={friend.id} k={friend.id} friend={friend.name}></Friend> )
            }
        </div>
    );
};

export default Friends;