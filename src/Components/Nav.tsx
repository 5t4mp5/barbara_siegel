import * as React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FunctionComponent = () => {
  const tabs: Array<string> = [
    'Home',
    'Listings',
    'Past Sales',
    'About Me',
    'Testimonials',
    'About Friedberg',
    'Services',
    'Mortgage Info',
  ];
  return (
    <ul className="nav">
      {tabs.map((tab: string) => (
        <li>
          <Link to={tab}>{tab}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
