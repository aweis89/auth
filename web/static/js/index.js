import React from 'react';
import { render } from 'react-dom';
import Stripe from './stripe.jsx'
import Card from './card.jsx'

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
//import App from './containers/App';
// import todoApp from './reducers';

// let store = createStore(todoApp)

render(
  <Card />,
  document.getElementById('root')
);
