import React, { Component } from 'react'
import { render  } from 'react-dom'
import { Alert } from 'react-bootstrap'

export default class BAlert extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  componentDidMount() {
    if(this.props.timeout) {
      setTimeout(()=> {
        this.setState({show: false})
      }, parseInt(this.props.timeout))
    }
  }

  render() {
    return (
      <div>
        {this.state.show &&
          <Alert bsStyle={this.props.bsStyle || "info"}>
            {this.props.children}
          </Alert>}
      </div>
    )
  }
}
