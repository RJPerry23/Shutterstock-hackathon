import React from 'react';
import page from '../../assets/HomePage.png';
import './LoggedIn.scss';
import SideNavigation from '../SideNavigation/SideNavigation';
import { Link } from 'react-router-dom';

function LoggedIn() {
  return (
    <div className='container'>
      <SideNavigation />
      <img className='page' src={page} alt='Home Page' />
      <Link className='invisible-button-link' to="/login">
      <button className='invisible-button'>Join Now</button>
      </Link>
      <SideNavigation />
    </div>
  );
}

export default LoggedIn;
