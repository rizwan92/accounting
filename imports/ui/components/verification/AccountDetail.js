import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
export default class accountDetail  extends Component {
  constructor() {
    super();
    this.state={
        accname:'',
        accnumber:'',
        acctype:'',
        bankname:'',
        bankadd:'',
        bankifsc:'',
    }
  }
  handleSubmit(event) {
     event.preventDefault();
     const accname = this.state.accname.trim();
     const accnumber =this.state.accnumber.trim();
     const acctype = this.state.acctype.trim();
     const bankname = this.state.bankname.trim();
     const bankadd = this.state.bankadd.trim();
     const bankifsc = this.state.bankifsc.trim();
        const account={
            accname:accname,
            accnumber:accnumber,
            acctype:acctype,
            bankname:bankname,
            bankadd:bankadd,
            bankifsc:bankifsc,
        }
       Meteor.call('user.profile.branch.account.update', account);
     this.setState({
       accname:'',
       accnumber:'',
       acctype:'',
       bankname:'',
       bankadd:'',
       bankifsc:'',
  });
    window.location.href = "/"
  }
  setValue(field, event) {
   let object = {};
   object[field] = event.target.value;
   this.setState(object);
 }
  render(){
    return(
       <div>
       <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
           <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>
                  Account Name
              </Col>
              <Col sm={10}>
              <FormControl type="text" placeholder="Enter Account Name" value={this.state.accname}onChange={this.setValue.bind(this, 'accname')} autoFocus required/>
              </Col>
           </FormGroup>
           <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>
                  Account Number
              </Col>
              <Col sm={10}>
              <FormControl type="text" placeholder="Enter Account Number" value={this.state.accnumber}onChange={this.setValue.bind(this, 'accnumber')} required />
              </Col>
           </FormGroup>
           <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>
                  Account Type
              </Col>
              <Col sm={10}>
              <FormControl type="text" placeholder="Enter Account Type" value={this.state.acctype}onChange={this.setValue.bind(this, 'acctype')} required/>
              </Col>
           </FormGroup>
           <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>
                  Bank Name
              </Col>
              <Col sm={10}>
              <FormControl type="text" placeholder="Enter Bank Name" value={this.state.bankname}onChange={this.setValue.bind(this, 'bankname')} required/>
              </Col>
           </FormGroup>
           <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>
                  Bank Address
              </Col>
              <Col sm={10}>
              <FormControl type="text" placeholder="Enter Bank Address" value={this.state.bankadd}onChange={this.setValue.bind(this, 'bankadd')} required/>
              </Col>
           </FormGroup>
           <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>
                  IFSC Code
              </Col>
              <Col sm={10}>
              <FormControl type="text" placeholder="Enter Banks's IFSC Code" value={this.state.bankifsc}onChange={this.setValue.bind(this, 'bankifsc')} required/>
              </Col>
           </FormGroup>
           <FormGroup>
             <Col smOffset={2} sm={10}>
               <Button type="submit">
               Submit
               </Button>
             </Col>
           </FormGroup>
         </Form>
       </div>
    );
  }
}
