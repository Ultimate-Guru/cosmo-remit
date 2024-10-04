/* eslint-disable no-unused-vars */
import React from 'react';
import ReviewImg from '../../assets/img/Frame 317.png';
import HomeArrow from '../../assets/img/Frame 257.png';

function Review() {
    return (
        <div className='h-screen flex flex-col items-center justify-center p-6 relative'>

            {/* Go home link */}
            <div className="absolute top-5 left-5 flex items-center space-x-2 cursor-pointer">
                <img src={HomeArrow} alt="Go back" />
            </div>

            {/* Review Image */}
            <img src={ReviewImg} className="mb-8" alt="Limit under review" />

            {/* Title */}
            <h2 className='text-2xl font-extrabold mb-4'>
                Limit increase under review
            </h2>

            {/* Description */}
            <p className='text-gray-500 text-center'>
                Your request to upgrade account limits is currently <br />
                being processed. Please check back later
            </p>
        </div>
    );
}

export default Review;