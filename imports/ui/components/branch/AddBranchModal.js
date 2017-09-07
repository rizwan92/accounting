import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import './branch.css';
export default class AddBranchModal extends Component {
  constructor() {
    super();
  }
  render(){
    return(
       <div>
       <Modal  show={this.props.show} bsSize="small" aria-labelledby="contained-modal-title-sm">
       <Modal.Header >
         <Modal.Title id="contained-modal-title-sm">Add Branch</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        </Modal.Body>
       <Modal.Footer>
         <Button onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>
       </div>
    );
  }
}
