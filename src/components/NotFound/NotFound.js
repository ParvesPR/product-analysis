import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Images/404.gif'
import './NotFound.css';

const NotFound = () => {
    return (
        <div  className='error-page'>
            <h1>Page Not found</h1>
            <Link className='back-home' to="/home"><h3>Back to Home</h3></Link>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;