import React from 'react';
import {
  Route,
  IndexRoute
 }                              from 'react-router';
import {
  App,
  ConnectedHome,
  ConnectedAbout
}                               from '../containers';
import {
  PageNotFound
}                               from '../views';

const Routes = () => {
  return (
    <Route path="/" component={App} >
      <IndexRoute component={ConnectedHome} />
      <Route path="/about" component={ConnectedAbout} />
      <Route path="*" component={PageNotFound} />
    </Route>
  );
};

export default Routes;
