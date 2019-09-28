import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home: React.FunctionComponent = () => {
  return (
    <div className="masthead">
      <div>Your Northern NJ Real Estate Expert</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <a href="mailto:barbaras5@gmail.com" className="link-button">
          Email Me
        </a>
        <a href="201-280-7653" className="link-button">
          Call Me
        </a>
      </div>
    </div>
  );
};

export default Home;
