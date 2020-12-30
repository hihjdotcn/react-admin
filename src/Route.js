import React from 'react'
import {
  HashRouter,
  Route
} from 'react-router-dom'

import {
  Home,
  About,
  Products
} from './somePage.jsx'

window.React = React

const AppRouter = () =>
  <HashRouter>
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/products" component={Products} />
    </div>
  </HashRouter>

export default AppRouter