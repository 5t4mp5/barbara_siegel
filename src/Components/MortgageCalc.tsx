import * as React from 'react';
const MortgageCalculator: any = require('mortgage-calculator-react');

const MortgageCalc: React.FunctionComponent = () => {
  console.log(MortgageCalculator.default);
  return (
    // <iframe
    //   src="https://www.realtor.com/mortgage/tools/mortgage-calculator/?iframe=true"
    //   style={{ width: '100%', height: '100%' }}
    // />

    <MortgageCalculator.default />
  );
};

export default MortgageCalc;
