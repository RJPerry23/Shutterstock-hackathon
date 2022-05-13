import React from 'react';
import page from '../../assets/HomePage.png';
import './Home.scss';
import SideNavigation from '../SideNavigation/SideNavigation';

function Home() {
  return (
    <div className='container'>
      <SideNavigation />
      <img className='page' src={page} alt='Home Page' />

      <SideNavigation />
    </div>
  );
}

export default Home;
