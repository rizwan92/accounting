import React, { Component } from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Panel from 'react-bootstrap/lib/Panel';
 export default class LedgerMasterDiplaySingleItem extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  deleteProduct(){
    let result = confirm("Want to delete?");
      if (result) {
        Meteor.call('ledger.remove',this.props.ledger._id);
        }
  }
  render(){
    const styles={
      list:{

      },
      listGroup:{
        display:'flex',
      },
      listitem:{
        flex:1,
        textAlign: 'center',
      },
    }
    return(
         <div>
         <ListGroupItem style={styles.listGroup}>
           <div  style={styles.listitem}>{this.props.ledger.name}</div>
           <div  style={styles.listitem}>{this.props.ledger.mobile}</div>
           <div  style={styles.listitem}>{this.props.ledger.gstin}</div>
           <div  onClick={ ()=> this.deleteProduct() }style={styles.listitem}>X</div>
         </ListGroupItem>
         </div>
       );
}
}
