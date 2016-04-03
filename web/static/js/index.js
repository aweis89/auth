import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import App from './app.jsx'
import RegisterUser from './register_user.js'

import Stripe from './stripe.jsx'
import Card from './card.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={RegisterUser} />
      <Route path="/register" component={Card}/>
    </Route>
  </Router>
), document.getElementById('root'))
