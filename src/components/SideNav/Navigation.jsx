import React from 'react';
import { Link } from 'react-router-dom';
import { calendarIcon, fileIcon, groupIcon, helpIcon, homeIcon, paintIcon } from '../../assets';

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
      </nav>
    </div>
  );
}

export default Navigation;
