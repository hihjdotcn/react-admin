import React from 'react'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'

import Home from './views/Home/index.js'
import Login from './views/Login/index.js'
import Products from './views/Products/index.jsx'
import Whoops404 from './views/whoops404'

window.React = React

const AppRouter = () =>
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/products" component={Products} />
      <Route component={Whoops404} />
    </Switch>
  </HashRouter>

export default AppRouter