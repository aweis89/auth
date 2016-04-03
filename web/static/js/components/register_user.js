import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { render } from 'react-dom';
import flash from '../utils/flash.js'
import Spinner from 'react-spinner-children'
import {
  Col,
  Button,
  Input,
  Cards,
  Panel,
  Alert,
  ButtonToolbar
} from 'react-bootstrap'
import { createUser } from '../utils/user_client.js'

export default class RegisterUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isValid: true,
      isLoading: false
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit() {
    this.setState({isLoading: true})
    createUser({
      email: this.state.email,
      password: this.state.password})
    .then((res) => {
      if(res.errors) {
        this.setState({errors: res.errors, isLoading: false})
      } else {
        this.setState({isLoading: false})
        flash.set('Successfully Created')
        browserHistory.push({pathname: '/register'})
      }
    })
  }

  render() {
    return (
      <Col xs={8} xsOffset={2}>
        {this.state.errors &&
          <Alert bsStyle="danger" dismissAfter={2000}>
            {this.state.errors.map((error) => {
              return (<p>{error.message}</p>)
            })}
          </Alert>}

          <form>
            <Col xs={12}>
            <Input onChange={this.handleChange.bind(this)} placeholder="Email" type="text" name="email" hasFeedback/>
          </Col>

          <Col xs={12}>
            <Input onChange={this.handleChange.bind(this)} placeholder="Password" type="password" name="password" hasfeedback/>
          </Col>

          <Col xs={6} >
            <Button onClick={this.submit.bind(this)} bsStyle="primary">Register</Button>
          </Col>
        </form>
        {this.state.isLoading && <Spinner />}
      </Col>
    )
  }
}
          //<Col xs={6}>
            //<Input onChange={this.handleChange.bind(this)} placeholder="Password Confirmation" type="password" name="password_confirmation" hasfeedback/>
          //</Col>

