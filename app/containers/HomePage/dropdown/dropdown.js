import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';
import dropdowncss from "./dropdown.css";
import FacebookLoginButton from '../FacebookLoginButton/FacebookLoginButton'
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton'

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="dropdown">
          <Row>
              <Col></Col>
              <Col>
        <Button className="buttonDrop" color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Acesse sua Conta!</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
                <FacebookLoginButton />
                <GoogleLoginButton />
            </CardBody>
          </Card>
        </Collapse>
        </Col>
        <Col></Col>
        </Row>
      </div>
    );
  }
}