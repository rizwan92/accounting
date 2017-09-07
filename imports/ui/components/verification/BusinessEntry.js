import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
export default class BusinessEntry  extends Component {
  constructor() {
    super();
      this.state={
            businessname:'',
      }
  }
  handleSubmit(event) {
       event.preventDefault();
       const businessname = this.state.businessname.trim();
      Meteor.call('user.profile.businessname.update', businessname);
       this.setState({
      businessname: '',
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
                      Business Name
                 </Col>
                 <Col sm={10}>
                 <FormControl type="text" placeholder="Business Name" value={this.state.businessname}onChange={this.setValue.bind(this, 'businessname')} autoFocus required/>
                 </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                  Next
                  </Button>
                </Col>
              </FormGroup>
            </Form>
       </div>
    );
  }
}
