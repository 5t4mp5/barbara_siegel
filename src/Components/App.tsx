import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import MortgageCalc from './MortgageCalc';
import Header from './Header';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Route component={Header} />
      <Route component={Nav} />
      <Route path="/home/" component={Home} />
      <Route path="/mortgage-info/" component={MortgageCalc} />
    </Router>
  );
};

export default App;
