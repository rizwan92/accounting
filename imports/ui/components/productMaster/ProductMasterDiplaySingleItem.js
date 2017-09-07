import React, { Component } from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Panel from 'react-bootstrap/lib/Panel';
 export default class ProductMasterDiplaySingleItem extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  deleteProduct(){
    let result = confirm("Want to delete?");
      if (result) {
        Meteor.call('product.remove',this.props.product._id);  //Logic to delete the item
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
           <div  style={styles.listitem}>{this.props.product.productName}</div>
           <div  style={styles.listitem}>{this.props.product.hsnCode}</div>
           <div  style={styles.listitem}>{this.props.product.mrp}Rs.</div>
           <div  style={styles.listitem}>{this.props.product.tax}%</div>
           <div  style={styles.listitem}>{this.props.product.purchasePrice}Rs.</div>
           <div  style={styles.listitem}>{this.props.product.stock}{this.props.product.uom}</div>
           <div className=" btn btn-danger" onClick={ ()=> this.deleteProduct() }style={styles.listitem}>X</div>
         </ListGroupItem>
         </div>
       );
}
}
