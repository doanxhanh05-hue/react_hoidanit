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
            <div className='hompage-content'>
                <div className='title-1'>Hanh dep trai nhat the gioi</div>
                <div className='title-2'>asdddddddddddddddddddddddddddddd
                    asdddddddddddddddddddddddddddddddddddddddddddddddddddd
                    asdddddddddddddddddddddddddddddddddddddddddddddddddddd
                </div>
                <div className='title-3'>
                    <button>Get's started, It's free</button></div>
            </div>

        </div>
    )
}

export default HomePage;
