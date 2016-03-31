import React, { Component, PropTypes } from 'react';
import {Row, Column, Button} from 'react-foundation';

export default class Stdd extends Component {
  render() {
    return(
      <div className="grid-offset-example">
        <Row className="display">
          <Column large={1}>1</Column>
          <Column large={11}>11</Column>
        </Row>
        <Row className="display">
          <Column large={1}>1</Column>
          <Column large={10} offsetOnLarge={1}>10, offset 1</Column>
        </Row>
        <Row className="display">
          <Column large={1}>1</Column>
          <Column large={9} offsetOnLarge={2}>9, offset 2</Column>
        </Row>
        <Row className="display">
          <Column large={1}>1</Column>
          <Column large={8} offsetOnLarge={3}>8, offset 3</Column>
        </Row>
      </div>
    )

  }
}
