import * as React from 'react';

const Header: React.FunctionComponent = () => {
  return (
    <ul className="header">
      <li>
        <img
          src="B-SIEGEL.JPG"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      </li>
      <li>
        <img
          src="friedberg-logo.png"
          style={{ height: '100px', width: 'auto' }}
        />
      </li>
      <li>
        <p>Barbara Siegel</p>
        <p>(201) 280-7653</p>
      </li>
    </ul>
  );
};

export default Header;
