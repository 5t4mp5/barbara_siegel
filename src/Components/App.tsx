import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import MortgageCalc from './MortgageCalc';
import ContactCard from './ContactCard';
import Header from './Header';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Route component={Header} />
      <Route component={Nav} />
      <Route path="/home/" component={Home} />
      <Route path="/mortgage-info/" component={MortgageCalc} />
      <Route path="/about-me/" component={ContactCard} />
      {/* <Redirect to="/home" /> */}
    </Router>
  );
};

export default App;
