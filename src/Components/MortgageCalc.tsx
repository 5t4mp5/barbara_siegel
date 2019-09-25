import * as React from 'react';

const MortgageCalc: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <h1>Mortgage Calc</h1>
      <iframe
        src="https://www.realtor.com/mortgage/tools/mortgage-calculator/?iframe=true"
        style={{ width: '100%', height: '100%' }}
      />
    </React.Fragment>
  );
};

export default MortgageCalc;
