import React, { Component } from 'react';
import Header from '../components/header/Header';
import LedgerMaster from '../components/ledgerMaster/LedgerMaster';
export default class LedgerMasterPage extends Component {
  constructor() {
    super();
    
  }
  render(){
    return(
       <div>
         <Header   name="Accounting" />
        <LedgerMaster />
       </div>
    );
  }
}
