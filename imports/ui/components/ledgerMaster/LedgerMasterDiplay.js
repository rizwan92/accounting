import React, { Component } from 'react';
import LedgerMasterSingleItem from './LedgerMasterSingleItem';
 export default class LedgerMasterDiplay extends Component {
  constructor() {
    super();
  }

  render(){
    return(
       <div>
       {this.props.ledgeres.map((ledger, i)=>
                <LedgerMasterSingleItem ledger={ledger} key={i} />
       )}
       </div>
    );
  }
}
