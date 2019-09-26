import * as React from 'react';
import { Link } from 'react-router-dom';

const normalizeForLink: Function = (str: string): string =>
  str.replace(' ', '-').toLowerCase();

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
      {tabs.map((tab: string) => {
        const link: string = normalizeForLink(tab);
        return (
          <li key={link}>
            <Link to={link}>{tab}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
