import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = () => {
  return (
    <ul className="header">
      <li>
        <img
          src="B-SIEGEL.JPG"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
        <p>Barbara Siegel</p>
        <p>(201) 280-7653</p>
      </li>
      <li>
        <img
          src="friedberg-logo.png"
          style={{ height: '120px', width: 'auto' }}
        />
      </li>
      <li>
        <a href="mailto:barbaras5@gmail.com" className="link-button">
          Contact Me
        </a>
      </li>
    </ul>
  );
};

export default Header;
