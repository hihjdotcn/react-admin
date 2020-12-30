import React from 'react'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'

import Home from './views/Home/index.jsx'
import Login from './views/Login/index.jsx'
import Products from './views/Products/index.jsx'
import Detail from './views/Products/Detail/index.jsx'
import Whoops404 from './views/whoops404/index.jsx'

window.React = React

const AppRouter = () =>
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/products" component={Products} />
      <Route path="/products/detail" component={Detail} />
      <Route component={Whoops404} />
    </Switch>
  </HashRouter>

export default AppRouter