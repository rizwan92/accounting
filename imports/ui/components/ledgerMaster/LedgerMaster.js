import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { LedgerMasterApi } from '../../../api/ledgerMaster';
import  LedgerMasterForm  from './LedgerMasterForm';
import  LedgerMasterDiplay  from './LedgerMasterDiplay';
import  AddAccount  from './AddAccount';
 class LedgerMaster extends Component {
  render(){
    return(
       <div>
       <LedgerMasterForm  />
       <AddAccount ledgeres={this.props.ledgeres}/>
       <LedgerMasterDiplay ledgeres={this.props.ledgeres}  />
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
}, LedgerMaster);
