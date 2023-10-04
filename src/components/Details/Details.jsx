import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const details=useLoaderData();
    const {email,name,phone,website}=details;
    const navigate=useNavigate();

    const handlatGoBack=()=>navigate(-1);
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
            <h4>Site: {website}</h4>
            <button onClick={handlatGoBack}>Go Back</button>
        </div>
    );
};

export default Details;