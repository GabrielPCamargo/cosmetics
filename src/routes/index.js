import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Index from '../pages/Index';
import Register from '../pages/Register';
import MyProducts from '../pages/MyProducts';
import MyProductsRegister from '../pages/MyProductRegister';
import Page404 from '../pages/Page404';

export default function App() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Index} />
      <MyRoute path="/login" component={Login} />
      <MyRoute path="/register" component={Register} />
      <MyRoute path="/myproducts" exact isClosed component={MyProducts} />
      <MyRoute
        path="/myproducts/register"
        isClosed
        component={MyProductsRegister}
      />
      <MyRoute
        path="/myproducts/:id/edit"
        isClosed
        component={MyProductsRegister}
      />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
