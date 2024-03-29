import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Importing the pager to routes
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/CreatePoint" component={CreatePoint}/>
    </BrowserRouter>
  );
};

export default Routes;