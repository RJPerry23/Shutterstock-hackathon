import React from 'react';
import './Nav.scss'
import LogoContributor from '../../images/ss_logo_contributor.png'
import User from '../../images/user.svg'
import Earth from '../../images/earth.svg'

const Nav = () => {
    return (
        <div className='nav'>
            <div className='nav__left'>
                <img src={LogoContributor} alt="contributor"
                className='nav__left--contributor'/>
            </div>
            <div className='nav__right'>
                <img className="nav__right--icon" src={User} alt="person"/>
                <div className='nav__right--user'>
                Christina
                </div>
                <img className="nav__right--icon" src={Earth} alt="explore"/>
                <div className='nav__right--language'>
                English
                </div>
            </div>
        </div>
    );
};

export default Nav;