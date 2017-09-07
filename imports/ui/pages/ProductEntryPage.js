import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import React, { Component } from 'react';
import Header from '../components/header/Header';
import ProductMasterDiplay from '../components/productEntry/ProductMasterDiplay';
export default class ProductEntryPage extends Component {
  constructor() {
    super();
  }
  render(){
    return(
       <div>
         <Header   name="Accounting" />
           <ProductMasterDiplay  />
       </div>
    );
  }
}
