import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
export default class LedgerMasterForm extends Component {
  constructor() {
    super();
    this.state={
      companyName: '',
      address1: '',
      mobile: '',
      landline: '',
      gstin: '',
      email: '',
      website: '',
      facebookPage: '',
          }
  }

  setValue(field, event) {
   let object = {};
   object[field] = event.target.value;
   this.setState(object);
 }
  handleSubmit(event) {
       event.preventDefault();
       const companyName = this.state.companyName.trim();
       const address1 =this.state.address1.trim();
       const mobile = this.state.mobile.trim();
       const landline = this.state.landline.trim();
       const gstin = this.state.gstin.trim();
       const email = this.state.email.trim();
       const website = this.state.website.trim();
       const facebookPage = this.state.facebookPage.trim();
      const ledger={
          companyName:companyName,
          address1:address1,
          mobile:mobile,
          landline:landline,
          gstin:gstin,
          email:email,
          website:website,
          facebookPage:facebookPage,
        }
      Meteor.call('ledger.insert', ledger);
       this.setState({
      companyName: '',
      address1: '',
      mobile: '',
      landline: '',
      gstin: '',
      email: '',
      website: '',
      facebookPage: '',
    });
    }
  render(){
    return(
       <div>
       <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
         <FormGroup controlId="formHorizontalEmail">
           <Col componentClass={ControlLabel} sm={2}>
             CompanyName
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="CompanyName" value={this.state.companyName}  onChange={this.setValue.bind(this, 'companyName')} required/>
           </Col>
         </FormGroup>

         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           Email
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="Email" value={this.state.email} onChange={this.setValue.bind(this, 'email')} />
           </Col>
         </FormGroup>

         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           Mobile
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="Mobile" value={this.state.mobile} onChange={this.setValue.bind(this, 'mobile')} />
           </Col>
         </FormGroup>

         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           Landline
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="Landline" value={this.state.landline} onChange={this.setValue.bind(this, 'landline')} />
           </Col>
         </FormGroup>

         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           GSTIN
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="GSTIN" value={this.state.gstin} onChange={this.setValue.bind(this, 'gstin')} />
           </Col>
         </FormGroup>

         <FormGroup controlId="formHorizontalPassword" bsSize="large">
           <Col componentClass={ControlLabel} sm={2}>
             Address
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="Address1" value={this.state.address1}onChange={this.setValue.bind(this, 'address1')} />
           </Col>
         </FormGroup>

         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           Website
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="Website" value={this.state.website} onChange={this.setValue.bind(this, 'website')} />
           </Col>
         </FormGroup>

         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           FacebookPage
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="FacebookPage" value={this.state.facebookPage} onChange={this.setValue.bind(this, 'facebookPage')} />
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
