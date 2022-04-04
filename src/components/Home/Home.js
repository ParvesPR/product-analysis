import React from 'react';
import './Home.css';
import Camera from '../../Images/camera.jpg'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="banner">
                <div className="banner-text">
                    <h1 className='first-banner-title'>Your Next Choice</h1>
                    <h1 className='second-banner-title'>Your Next Camera</h1>
                    <p>Capture the peaks of more decisive moments with the α7 III from Sony packing newly developed back-illuminated full-frame CMOS sensor  and other advanced imaging innovations, high-speed response, ease of operation, and reliable durability that are ready for various shooting needs.</p>
                    <button className='banner-btn'>Live Demo</button>
                </div>
                <div className="banner-img">
                    <img src={Camera} alt="" />
                </div>
            </div>
            <div className="reviews">
                <h1 className='review-title'>Customer Reviews :</h1>
            </div>
        </div>
    );
};

export default Home;