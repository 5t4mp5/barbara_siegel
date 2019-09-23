import * as React from 'react';

const Nav: React.FunctionComponent = () => {
  return (
    <ul
      style={{
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: '0',
        height: '5vh',
        color: 'white',
        fontFamily: 'Roboto, Helvetica, Nue, Helvetica, Arial, sans-serif',
      }}
    >
      <li>Home</li>
      <li>Listings</li>
      <li>Past Sales</li>
      <li>About Me</li>
      <li>Testimonials</li>
      <li>About Friedberg</li>
      <li>Services</li>
      <li>Mortgage Info</li>
    </ul>
  );
};

export default Nav;
