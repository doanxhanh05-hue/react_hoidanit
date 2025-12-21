import React from 'react'
import VideoHomepage from '../../assest/video_homepage.mp4';
const HomePage = (props) => {
    return (
        <div className='homepage-container'>
            <video autoPlay loop muted>
                <source 
                src={VideoHomepage}
                type='video/mp4'
                />
            </video>

        </div>
    )
}

export default HomePage;
