import React from 'react';
import page from '../../assets/HomePage.png';
import './Home.scss';
import Navigation from '../SideNav/Navigation';

function Home() {
  return (
    <div className='container'>
          <img className='page' src={page} alt="Home Page" />
            <Navigation />
    </div>
  );
}

export default Home;
