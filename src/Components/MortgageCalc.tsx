import * as React from 'react';
import ContactCard from './ContactCard';
const MortgageCalculator: any = require('mortgage-calculator-react');

const MortgageCalc: React.FunctionComponent = () => {
  console.log(MortgageCalculator.default);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <iframe
        src="https://www.realtor.com/mortgage/tools/mortgage-calculator/?iframe=true"
        style={{ width: '50%', height: '100vh' }}
      />
      <ContactCard />
    </div>
    // <MortgageCalculator.default />
  );
};

export default MortgageCalc;
