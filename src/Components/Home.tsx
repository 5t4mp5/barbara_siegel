import * as React from 'react';
import { EmailButton, PhoneButton } from './Buttons';

const Home: React.FunctionComponent = () => {
  return (
    <div className="masthead">
      <div>Your Northern NJ Real Estate Expert</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <EmailButton />
        <PhoneButton />
      </div>
    </div>
  );
};

export default Home;
