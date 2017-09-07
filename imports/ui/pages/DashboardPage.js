import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Header from '../components/header/Header';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import BranchList from '../components/branch/BranchList';
export default class DashboardPage extends Component {
  constructor() {
    super();
  }
  render(){
    return(
          <div>
          <Header name="Accounting" />
          <Grid style={{marginTop:80}}>
          <Row>
            <Col sm={2} className="text-center" ></Col>
            <Col sm={8} className="text-center" >
            <BranchList />
            </Col>
            <Col sm={2} className="text-center" ></Col>
          </Row>
          </Grid>
          </div>
    );
  }
}
