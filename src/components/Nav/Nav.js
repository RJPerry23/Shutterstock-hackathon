import React from 'react';
import './Nav.scss'
import LogoContributor from '../../images/ss_logo_contributor.png'
import User from '../../images/user.svg'
import Earth from '../../images/earth.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navi'>
            <div className='navi__left'>
                <Link to="/" className='link'>
                <img src={LogoContributor} alt="contributor"
                className='navi__left--contributor'/>
                </Link>
            </div>
            <div className='navi__right'>
                <img className="navi__right--icon" src={User} alt="person"/>
                <div className='navi__right--user'>
                Christina
                </div>
                <img className="navi__right--icon" src={Earth} alt="explore"/>
                <div className='navi__right--language'>
                English
                </div>
            </div>
        </div>
    );
};

export default Nav;