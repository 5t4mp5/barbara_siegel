import * as React from 'react';

const MortgageCalc: React.FunctionComponent = () => {
  return (
    <iframe
      src="https://www.realtor.com/mortgage/tools/mortgage-calculator/?iframe=true"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default MortgageCalc;
