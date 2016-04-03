import React, { Component } from 'react'
import { render  } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { Breadcrumb } from 'react-bootstrap'
import Alert from './alert.js'
import flash from '../utils/flash.js'
import $ from 'jquery'

export default class App extends Component {

  render() {
    const flash_msg = flash.get();
    return (
      <div>
        <ol className="breadcrumb">
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/register">SignUp</Link></li>
        </ol>
        <Alert timeout={10000}>{flash_msg}</Alert>
        {this.props.children}
      </div>
    )
  }
}
