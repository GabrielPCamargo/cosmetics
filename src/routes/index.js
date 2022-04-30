import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Index from '../pages/Index';
import Page404 from '../pages/Page404';

export default function App() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Index} />
      <MyRoute path="/login" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
