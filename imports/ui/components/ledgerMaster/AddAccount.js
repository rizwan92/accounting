import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
export default class AddAccount  extends Component {
  constructor() {
    super();
      this.state={
            ledgerid:'',
            accname:'',
            accnumber:'',
            acctype:'',
            bankname:'',
            bankadd:'',
            ifsc:'',
      }
  }
  setValue(field, event) {
   let object = {};
   object[field] = event.target.value;
   this.setState(object);
 }
 handleSubmit(event) {
      event.preventDefault();
      const ledgerid = this.state.ledgerid.trim();
      const accname = this.state.accname.trim();
      const accnumber = this.state.accnumber.trim();
      const acctype = this.state.acctype.trim();
      const bankname = this.state.bankname.trim();
      const bankadd = this.state.bankadd.trim();
      const ifsc = this.state.ifsc.trim();
      const account={
        accname:accname,
        accnumber:accnumber,
        acctype:acctype,
        bankname:bankname,
        bankadd:bankadd,
        ifsc:ifsc,
      }
     Meteor.call('ledger.update,account',ledgerid,account);
      this.setState({
        ledgerid:'',
        accname:'',
        accnumber:'',
        acctype:'',
        bankname:'',
        bankadd:'',
        ifsc:'',
   });
   }
  render(){
    return(
       <div>
       <h3>Add Account Details</h3>
       <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
       <FormGroup controlId="formControlsSelect">
        <Col componentClass={ControlLabel} sm={2}>
         <ControlLabel>Select Ledger</ControlLabel>
         </Col>
          <Col sm={10}>
         <FormControl componentClass="select" placeholder="Select Ledger" value={this.state.ledgerid}  onChange={this.setValue.bind(this, 'ledgerid')} required>
           <option value="">select</option>
           {this.props.ledgeres.map((ledger, i) =>
             <option key={i} value={ledger._id}>{ledger.name}</option>
           )}
         </FormControl>
          </Col>
       </FormGroup>

        <FormGroup >
           <Col componentClass={ControlLabel} sm={2}>
               Account Name
           </Col>
           <Col sm={10}>
           <FormControl type="text" placeholder="Enter Account Name" value={this.state.accname}onChange={this.setValue.bind(this, 'accname')} />
           </Col>
        </FormGroup>
        <FormGroup >
           <Col componentClass={ControlLabel} sm={2}>
               Account Number
           </Col>
           <Col sm={10}>
           <FormControl type="text" placeholder="Enter Account Number" value={this.state.accnumber}onChange={this.setValue.bind(this, 'accnumber')} />
           </Col>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
         <Col componentClass={ControlLabel} sm={2}>
          <ControlLabel>Account Type</ControlLabel>
          </Col>
           <Col sm={10}>
          <FormControl componentClass="select" placeholder="Select Account Type" value={this.state.acctype}  onChange={this.setValue.bind(this, 'acctype')} required>
            <option value="">select</option>
              <option  value="saving">Saving</option>
              <option  value="current">Current</option>
          </FormControl>
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
          <FormControl type="text" placeholder="Enter Bank Address" value={this.state.bankadd}onChange={this.setValue.bind(this, 'bankadd')} />
          </Col>
       </FormGroup>
       <FormGroup >
          <Col componentClass={ControlLabel} sm={2}>
              IFSC CODE
          </Col>
          <Col sm={10}>
          <FormControl type="text" placeholder="Enter IFSC Code" value={this.state.ifsc}onChange={this.setValue.bind(this, 'ifsc')} />
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
