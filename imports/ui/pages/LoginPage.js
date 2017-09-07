import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Header from '../components/header/Header';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Login from '../components/login/Login';
import ShopRegisteration from '../components/registeration/ShopRegisteration';
export default class LoginPage extends Component {
  render(){
    return (
      <div >
        <Header   name="Accounting" />
        <Grid >
            <Row>
            <br />
              <Col sm={12} >
              <Login />
            </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col sm={3} className="text-center" ></Col>
              <Col sm={6} className="text-center" >
                <ShopRegisteration />
              </Col>
              <Col sm={3} className="text-center" ></Col>
            </Row>

        </Grid>
        </div>
    );
  }
}
