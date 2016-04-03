import React, { Component } from 'react'
import { render  } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { Alert, Breadcrumb } from 'react-bootstrap'
import $ from 'jquery'

export default class App extends Component {
  render() {
    /* TODO use props */
    const flash = window.location.search.replace("?flash=", "").replace("+", " ")

    return (
      <div>
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">SignUp</Link></li>
      </ol>

      {flash[0] && <Alert bsStyle="info">{flash}</Alert>}
        {this.props.children}
      </div>
    )
  }
}
