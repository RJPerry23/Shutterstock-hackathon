import React from 'react';
import page from '../../assets/HomePage.png';
import './LoggedIn.scss';
import SideNavigation from '../SideNavigation/SideNavigation';

function LoggedIn() {
  return (
    <div className='container'>
      <SideNavigation />
      <img className='page' src={page} alt='Home Page' />
    </div>
  );
}

export default LoggedIn;
