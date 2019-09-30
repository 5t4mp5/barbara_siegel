import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = () => {
  return (
    <ul className="header">
      <li
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="B-SIEGEL-HEADER.JPG"
          style={{ width: 'auto', height: '100px', borderRadius: '50%' }}
        />
        <p>Barbara Siegel</p>
        <p>(201) 280-7653</p>
        <p>barbaras5@aol.com</p>
      </li>
      <li>
        <img
          src="friedberg-logo.png"
          style={{
            height: '140px',
            width: 'auto',
          }}
        />
      </li>
      <li>
        <a href="mailto:barbaras5@gmail.com" className="link-button">
          Email Me
        </a>
        <a href="tel:201-280-7653" className="link-button">
          Call Me
        </a>
      </li>
    </ul>
  );
};

export default Header;
