import React, { Component } from 'react';
import Header from '../components/header/Header';
import { createContainer } from 'meteor/react-meteor-data';
import CategoryForm from '../components/catSubcat/CategoryForm';
import TaxForm from '../components/catSubcat/TaxForm';
import UnitForm from '../components/catSubcat/UnitForm';
import HSNCodeForm from '../components/catSubcat/HSNCodeForm';
import StateForm from '../components/catSubcat/StateForm';
import CityForm from '../components/catSubcat/CityForm';
import SubCategoryForm from '../components/catSubcat/SubCategoryForm';
import { SubCategoryApi } from '../../api/subCategory';
import { CategoryApi } from '../../api/category';
import { State } from '../../api/state';
import { City } from '../../api/city';
class CategorySubCategoryPage extends Component {
  render(){
    return(
       <div>
         <Header   name="Accounting" />
      <h1>Category</h1>
        <CategoryForm categories={this.props.categories} />
          <h1>Sub Category</h1>
        <SubCategoryForm  categories={this.props.categories} />
            <h1>Tax</h1>
        <TaxForm />
        <h1>UnitForm</h1>
          <UnitForm />
          <h1>HSN Code</h1>
            <HSNCodeForm />
            <h1>StateForm</h1>
              <StateForm />
            <h1>City Form</h1>
                <CityForm  states={this.props.states}/>
       </div>
    );
  }
}
export default createContainer(() => {
  return {
    categories: CategoryApi.find({}).fetch(),
    subcategories: SubCategoryApi.find({}).fetch(),
    states: State.find({}).fetch(),
    cities: City.find({}).fetch(),
  };
}, CategorySubCategoryPage);
