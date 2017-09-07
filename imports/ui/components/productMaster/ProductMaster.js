import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { CategoryApi } from '../../../api/category';
import { SubCategoryApi } from '../../../api/subCategory';
import { ProductMasterApi } from '../../../api/productMaster';
import ProductMasterForm from './ProductMasterForm';
import ProductMasterDiplay from './ProductMasterDiplay';
class ProductMaster  extends Component {
  constructor() {
    super();
  }
  render(){
    return(
       <div>
       <ProductMasterForm categories={this.props.categories} subcategories={this.props.subcategories} />
       <ProductMasterDiplay products={this.props.products} />
       </div>
    );
  }
}
export default createContainer(() => {
  return {
    products: ProductMasterApi.find({}).fetch(),
    categories: CategoryApi.find({}).fetch(),
    subcategories: SubCategoryApi.find({}).fetch(),
 };
}, ProductMaster);
