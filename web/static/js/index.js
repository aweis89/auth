import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import App from './components/app.js'
import RegisterUser from './components/register_user.js'

import Stripe from './components/stripe.js'
import Card from './components/card.js'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={RegisterUser} />
      <Route path="/register" component={Card}/>
    </Route>
  </Router>
), document.getElementById('root'))
