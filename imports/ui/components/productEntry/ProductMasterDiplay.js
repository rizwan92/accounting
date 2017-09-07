import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ProductMasterDiplaySingleItem from './ProductMasterDiplaySingleItem'
import { ProductMasterApi } from '../../../api/productMaster';
 class ProductMasterDiplay extends Component {
  constructor() {
    super();
  }

  render(){
    return(
       <div>
       {this.props.products.map((product,i)=>
                <ProductMasterDiplaySingleItem product={product} key={i}/>
       )}
       </div>
    );
  }
}
export default createContainer(() => {
  return {
    products: ProductMasterApi.find({}).fetch(),
  };
}, ProductMasterDiplay);
