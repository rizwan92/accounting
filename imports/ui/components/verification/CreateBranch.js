import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
export default class CreateBranch  extends Component {
  constructor() {
    super();
      this.state={
          shopname:'',
          shopadd:'',
          gstinnumber:'',
          email:'',
          password:''
      }
  }
  handleSubmit(event) {
     event.preventDefault();
     const shopname = this.state.shopname.trim();
     const shopadd =this.state.shopadd.trim();
     const gstinnumber = this.state.gstinnumber.trim();
     const email = this.state.email.trim();
     const password = this.state.password.trim();
        const branch={
            shopname:shopname,
            shopadd:shopadd,
            gstinnumber:gstinnumber,
            email:email,
            password:password,
            accountDetail:[],
        }
       Meteor.call('user.profile.branch.update', branch);
     this.setState({
       shopname:'',
       shopadd:'',
       gstinnumber:'',
       email:'',
       password:'',
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
                      Shop Name
                  </Col>
                  <Col sm={10}>
                  <FormControl type="text" placeholder="Enter Shop Name" value={this.state.shopname}onChange={this.setValue.bind(this, 'shopname')} autoFocus required/>
                  </Col>
               </FormGroup>
               <FormGroup >
                  <Col componentClass={ControlLabel} sm={2}>
                      Shop Address
                  </Col>
                  <Col sm={10}>
                  <FormControl type="text" placeholder="Shop Address" value={this.state.shopadd}onChange={this.setValue.bind(this, 'shopadd')} required/>
                  </Col>
               </FormGroup>
               <FormGroup >
                  <Col componentClass={ControlLabel} sm={2}>
                      GSTIN Number
                  </Col>
                  <Col sm={10}>
                  <FormControl type="text" placeholder="Enter GSTIN Number" value={this.state.gstinnumber}onChange={this.setValue.bind(this, 'gstinnumber')} required/>
                  </Col>
               </FormGroup>
               <FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                   <Col componentClass={ControlLabel} sm={2}>
                     Shop Email
                   </Col>
                   <Col sm={10}>
                     <FormControl type="email" placeholder="Enter Shop Email" value={this.state.email}  onChange={this.setValue.bind(this, 'email')} required/>
                   </Col>
                 </FormGroup>
                 <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Shop  Password
                    </Col>
                    <Col sm={10}>
                      <FormControl type="password" placeholder="Password for this Shop" value={this.state.password}  onChange={this.setValue.bind(this, 'password')} required/>
                    </Col>
                  </FormGroup>
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
