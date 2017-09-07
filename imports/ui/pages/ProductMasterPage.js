import React, { Component } from 'react';
import ProductMaster from '../components/productMaster/ProductMaster';
import Header from '../components/header/Header';
export default class ProductMasterPage extends Component {
  constructor() {
    super();
  }

  render(){
    return(
       <div>
         <Header   name="Accounting" />
          <ProductMaster />
       </div>
    );
  }
}
