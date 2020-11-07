import React from 'react';
import Header from './Header.js';
import './Home.css'
function Home() {
    return (
        <div className='home'>
            <Header path='/'/>
            <div className="homeText">
                <h2>This dashboard provides live updates for natural disasters around the world </h2>
                <small>Use the navigation bar to view the pages mentioned below</small><br/><br/>
                <p><u>Live Feed</u></p>
                Latest social media updates<br/><br/>
                <p><u>Analytics</u></p>
                An overview of natural disaster metrics
            </div>
        </div>
    )
}

export default Home
