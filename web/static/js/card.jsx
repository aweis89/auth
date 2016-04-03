import React, { Component, PropTypes } from 'react';
import ReactCardFormContainer from 'card-react';
import { 
  Col,
  Button,
  Input,
  Cards,
  Panel,
  ButtonToolbar
} from 'react-bootstrap'

export default class Card extends Component {
  componentDidMount() {
    var c = React.Children.map(this._container.props.children, x => x.props)
    console.log(c)
    console.log(this.props.classes)
  }

  render() {
    var monthYearStyles = {
      //borderRadius: '4px 0 0 4px',
    }
    var cvcStyles = {
      //borderRadius: '0',
    }
    var buttonStyles = {
      //borderRadius: '0 4px 4px 0px',
      width: 'auto'
    }
    return(
      <div>
        <Col xs={12}>
          <Panel header={'Pay Me'}>
            <Col xs={8} xsOffset={2}>
              <div id="card-wrapper"></div>
            </Col>
            <ReactCardFormContainer

              ref={(c) => this._container = c}
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
                  valid: 'success', // optional — default 'jp-card-valid'
                  invalid: 'error' // optional — default 'jp-card-invalid'
                }
              }

              formatting={true} // optional - default true
            >

            <Col xs={8} xsOffset={2}>
              <form>
                <Col xs={12}>
                  <Input placeholder="Card number" type="text" name="CCnumber" hasFeedback/>
                </Col>

                <Col xs={12}>
                  <Input ref={(c) => this._input = c} placeholder="Full name" type="text" name="CCname" hasFeedback/>
                </Col>

                <Col xs={4}>
                  <Input placeholder="MM/YY" type="text" name="CCexpiry" style={monthYearStyles} hasFeedback/>
                </Col>
                <Col xs={4}>
                  <Input placeholder="CVC" bsStyle="success" type="text" name="CCcvc" className="error" style={cvcStyles} hasFeedback/>
                </Col>

                <Col xs={4} >
                  <Button className="pull-right" style={buttonStyles}>  Submit  </Button>
                </Col>
              </form>
            </Col>

          </ReactCardFormContainer>
        </Panel>
      </Col>
    </div>
    )
  }
}
