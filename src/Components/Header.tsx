import * as React from 'react';
import { PhoneButton, EmailButton } from './Buttons';

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
          style={{ height: '10vh', borderRadius: '50%' }}
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
        <EmailButton />
        <PhoneButton />
      </li>
    </ul>
  );
};

export default Header;
