import React, { Component, PropTypes } from 'react';
import ReactCardFormContainer from 'card-react';
import {Row, Column, Button} from 'react-foundation';

export default class Card extends Component {
  render () {
    return(
      <div className="card">
        <Row className="display">
          <Column large={6} offsetOnLarge={6}>
            <div id="card-wrapper"></div>
          </Column>
        </Row>
          <ReactCardFormContainer

            container="card-wrapper" // required

            formInputsNames={
              {
                number: 'CCnumber', // optional — default "number"
                expiry: 'CCexpiry',// optional — default "expiry"
                cvc: 'CCcvc', // optional � default "cvc"
                name: 'CCname' // optional - default "name"
              }
            }

            initialValues= {
              {
                //number: '4242424242424242', // optional — default •••• •••• •••• ••�<t_X>�•
                //cvc: '123', // optional — default •••
                //expiry: '16/12', // optional — default ••/••
                //name: 'Random Name' // optional — default FULL NAME
              }
            }

            classes={
              {
                valid: 'valid-input', // optional — default 'jp-card-valid'
                invalid: 'invalid-input' // optional — default 'jp-card-invalid'
              }
            }

            formatting={true} // optional - default true
          >
            <Row className="display">
              <Column large={6} offsetOnLarge={6}>
                <form>

                  <Row className="display">
                    <Column large={12}>
                      <input placeholder="Card number" type="text" name="CCnumber" />
                    </Column>
                  </Row>

                  <Row className="display">
                    <Column small={12}>
                      <input placeholder="Full name" type="text" name="CCname" />
                    </Column>
                  </Row>

                  <Row className="display">
                    <Column small={4}>
                      <input placeholder="MM/YY" type="text" name="CCexpiry" />
                    </Column>
                    <Column small={4}>
                      <input placeholder="CVC" type="text" name="CCcvc" />
                    </Column>
                    <Column small={3}>
                      <Button bsStyle="primary">Submit</Button>
                    </Column>
                  </Row>

                </form>
              </Column>
            </Row>

        </ReactCardFormContainer>
    </div>
    )
  }
}
