import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const normalizeForLink: Function = (str: string): string =>
  str.replace(' ', '-').toLowerCase();

const Nav: React.FunctionComponent<RouteComponentProps> = ({
  location,
}: RouteComponentProps<{ pathname: string }>) => {
  const tabs: Array<string> = [
    'Home',
    'About Me',
    'Services',
    'Listings',
    'Past Sales',
    'Testimonials',
    'About Friedberg',
    'Mortgage Info',
  ];
  return (
    <ul className="nav">
      {tabs.map((tab: string) => {
        const link: string = normalizeForLink(tab);
        const active: boolean = location.pathname.includes(link);
        return (
          <li key={link} className={`nav-item ${active ? 'active' : ''}`}>
            <Link to={link}>{tab}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
