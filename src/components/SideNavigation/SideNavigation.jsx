import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './SideNavigation.scss';
import homeIcon from '../../assets/homeIcon.png';
import calendarIcon from '../../assets/calendarIcon.png';
import fileIcon from '../../assets/fileIcon.png';
import GroupIcon from '../../assets/GroupIcon.png';
import helpIcon from '../../assets/helpIcon.png';
import paintIcon from '../../assets/paintIcon.png';

function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className='nav nav--open'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/dashboard' className='nav__link'>
              <img className='nav__icon homeIcon' src={homeIcon} alt='calendar' />
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              <img className='nav__icon' src={calendarIcon} alt='calendar' />
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              <img className='nav__icon' src={GroupIcon} alt='calendar' />
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              <img className='nav__icon' src={paintIcon} alt='calendar' />
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              <img className='nav__icon' src={fileIcon} alt='calendar' />
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              <img className='nav__icon' src={helpIcon} alt='calendar' />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNavigation;
