import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNavigation.scss';
import homeIcon from '../../assets/homeIcon.png';
import calendarIcon from '../../assets/calendarIcon.png';
import fileIcon from '../../assets/fileIcon.png';
import GroupIcon from '../../assets/GroupIcon.png';
import helpIcon from '../../assets/helpIcon.png';
import paintIcon from '../../assets/paintIcon.png';
import ContributorBar from '../ContributorBar/ContributorBar';

function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <nav className='nav nav--open'>
        <ul className='nav__list'>
          <li className='nav__item nav__item--active'>
            <Link to='/dashboard' className='nav__link'>
              <img className='nav__icon nav__icon--active homeIcon' src={homeIcon} alt='calendar' />
            </Link>
            <span className='nav__text'>Home</span>
          </li>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              <img className='nav__icon' src={calendarIcon} alt='calendar' />
            </Link>
            <span className='nav__text'>Plan</span>
          </li>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              <img className='nav__icon' src={GroupIcon} alt='calendar' />
            </Link>
            <span className='nav__text'>Collection</span>
          </li>
          <li className='nav__item' onClick={handleOpen}>
            <Link to='/' className='nav__link'>
              <img className='nav__icon' src={paintIcon} alt='calendar' />
            </Link>
            <span className='nav__text'>Creator</span>
          </li>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              <img className='nav__icon' src={fileIcon} alt='calendar' />
            </Link>
            <span className='nav__text'>Account</span>
          </li>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              <img className='nav__icon' src={helpIcon} alt='calendar' />
            </Link>
            <span className='nav__text'>Help</span>
          </li>
        </ul>
      </nav>
      <div className={`contributorBar ${isOpen && 'contributorBar--open'}`}>
        <ContributorBar />
      </div>
    </div>
  );
}

export default SideNavigation;
