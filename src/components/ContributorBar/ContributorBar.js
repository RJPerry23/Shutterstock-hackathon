import React from 'react';
import ProfileImage from '../../images/image-1.png'
import './ContributorBar.scss'

const ContributorBar = () => {
    return (
        <div className='contributor'>
            <img src={ProfileImage} className="profile" alt="profile"/>
            <div className='contributor__item'>

                Christina
            </div>
            <div className='contributor__item'>
                Dashboard
            </div>
            <div className='contributor__item'>
                Earnings
            </div>
            <div className='contributor__item'>
                Portfolio
            </div>
            <div className='contributor__item'>
                Insights
            </div>
            <div className='contributor__item'>
                Settings
            </div>
            <div className='contributor__item'>
                Logout
            </div>
            <div className='contributor__item'>
                Feedback
            </div>
        </div>
    );
};

export default ContributorBar;