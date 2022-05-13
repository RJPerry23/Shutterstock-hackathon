import React from 'react';
import page from '../../assets/LandingPage.png';
import './Home.scss';
import SideNavigation from '../SideNavigation/SideNavigation';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='container'>
      <img className='page' src={page} alt='Home Page' />
      <Link className='invisible-button-link' to='/login'>
        <button className='invisible-button'>Join Now</button>
      </Link>
    </div>
  );
}
export default Home;
