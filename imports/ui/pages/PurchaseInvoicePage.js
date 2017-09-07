import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { LedgerMasterApi } from '../../api/ledgerMaster';
import Header from '../components/header/Header';
import CircularProgressbar from 'react-circular-progressbar';
import  PurchaseInvoice  from '../components/purchaseInvoice/PurchaseInvoice';
class PurchaseInvoicePage  extends Component {
  constructor() {
    super();
  }
  render(){
    return(
       <div>
        <Header   name="Accounting" />
        {this.props.loading ?    <CircularProgressbar percentage={100} initialAnimation/> :
               <PurchaseInvoice ledgeres={this.props.ledgeres} />

         }


       </div>
    );
  }
}
export default createContainer(() => {
  const todosHandle = Meteor.subscribe('ledgerMaster');
    const loading = !todosHandle.ready();
  return {
    loading,
    ledgeres: LedgerMasterApi.find({}).fetch(),
  };
}, PurchaseInvoicePage);
