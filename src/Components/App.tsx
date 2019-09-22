import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Route component={Header} />
      <Route path="/home/" component={Home} />
    </Router>
  );
};

export default App;
