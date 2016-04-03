import React, { Component, PropTypes } from 'react';

export default class Stripe extends Component {
  getInitialState() {
    return {
      card: {
        number: '',
        cvc: '',
        exp_month: '',
        exp_year: ''
      }
    }
  }

  componentDidMount() {
    Stripe.setPublishableKey(); // set your test public key
  }

  handleSubmit(e) {
    e.preventDefault();
    Stripe.createToken(this.state.card, function (status, response) {
      console.log( status, response );
    });
  }

  handleChange(e) {
    let card = this.state.card;
    card[e.target.name] = e.target.value
    this.setState(card);
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input size="20" name="number" onChange={this.handleChange} />
          <input size="4" name="cvc" onChange={this.handleChange} />
          <input size="2" name="exp_month" onChange={this.handleChange} />
          <input size="4" name="exp_year" onChange={this.handleChange} />
          <button type="submit">Pay</button>
        </form>
      </div>
    )
  }
}
