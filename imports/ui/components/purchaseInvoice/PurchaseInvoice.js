import React, { Component } from 'react';
import Autosuggest from 'react-bootstrap-autosuggest'
export default class PurchaseInvoice  extends Component {
  constructor() {
    super();
  }
  logChange(val) {
  console.log("Selected: " + JSON.stringify(val));
}
  render(){
    return(
       <div>



           <Autosuggest
               datalist={this.props.ledgeres}
               placeholder="Type Ledger"
               onChange={(value)=> {console.log(value);}}
              />
       </div>
    );
  }
}
