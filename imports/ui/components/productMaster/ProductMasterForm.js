import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

export default class ProductMasterForm extends Component {
  constructor() {
    super();
    this.state={
      productName:'',
      category:'',
      subCategory:'',
      hsnCode:'',
      mrp:'',
      uom:'',
      tax:'',
      purchasePrice:'',
      status:'',
      stock:'',
      createdAt: new Date(),
          }
  }
  setValue(field, event) {
   let object = {};
   object[field] = event.target.value;
   this.setState(object);
 }
  handleSubmit(event) {
       event.preventDefault();
       const productName = this.state.productName.trim();
       const category =this.state.category.trim();
       const subCategory = this.state.subCategory.trim();
       const hsnCode = this.state.hsnCode.trim();
       const mrp = this.state.mrp.trim();
       const uom = this.state.uom.trim();
       const tax = this.state.tax.trim();
       const purchasePrice = this.state.purchasePrice.trim();
       const status = this.state.status.trim();
       const stock = this.state.stock.trim();
        let product = {
          productName:productName,
          category:category,
          subCategory:subCategory,
          hsnCode:hsnCode,
          mrp:mrp,
          uom:uom,
          tax:tax,
          purchasePrice:purchasePrice,
          status:status,
          stock:stock,
        }
          Meteor.call('product.insert', product);
       this.setState({
      productName: '',
      category: '',
      subCategory: '',
      hsnCode: '',
      mrp: '',
      uom: '',
      tax: '',
      purchasePrice: '',
      status: 1,
      stock: '',
    });
    }
  render(){
    return(
       <div>
       <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
         <FormGroup controlId="formHorizontalEmail">
           <Col componentClass={ControlLabel} sm={2}>
             productName
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="productName" value={this.state.productName}  onChange={this.setValue.bind(this, 'productName')} autoFocus  required/>
           </Col>
         </FormGroup>

         <FormGroup controlId="formControlsSelect">
          <Col componentClass={ControlLabel} sm={2}>
           <ControlLabel>Category</ControlLabel>
           </Col>
            <Col sm={10}>
           <FormControl componentClass="select" placeholder="category" value={this.state.category}  onChange={this.setValue.bind(this, 'category')} required>
             <option value="">select</option>
               {this.props.categories.map((category, i) =>
                 <option key={i} value={category._id}>{category.name}</option>
               )}
           </FormControl>
            </Col>
         </FormGroup>


         <FormGroup controlId="formControlsSelect">
          <Col componentClass={ControlLabel} sm={2}>
           <ControlLabel>SubCategory</ControlLabel>
           </Col>
            <Col sm={10}>
           <FormControl componentClass="select" placeholder="subCategory" value={this.state.subCategory}  onChange={this.setValue.bind(this, 'subCategory')} required>
             <option value="">select</option>
             {this.props.subcategories.map((subcategory, i) =>{
               if (subcategory.catid==this.state.category) {
                 return( <option key={i} value={subcategory._id}>{subcategory.name}</option>);
               }
             })}
           </FormControl>
            </Col>
         </FormGroup>


         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           hsnCode
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="hsnCode" value={this.state.hsnCode} onChange={this.setValue.bind(this, 'hsnCode')} />
           </Col>
         </FormGroup>

         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           mrp
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="mrp" value={this.state.mrp} onChange={this.setValue.bind(this, 'mrp')} />
           </Col>
         </FormGroup>

         <FormGroup controlId="formControlsSelect">
          <Col componentClass={ControlLabel} sm={2}>
           <ControlLabel>Unit</ControlLabel>
           </Col>
            <Col sm={10}>
           <FormControl componentClass="select" placeholder="Unit Of Measurement" value={this.state.uom}  onChange={this.setValue.bind(this, 'uom')} required>
             <option value="">select</option>
             <option value="Kg">Kg</option>
             <option value="piece">piece</option>
             <option value="bag">bag</option>
             <option value="liter">liter</option>
             <option value="meeter">meeter</option>
           </FormControl>
            </Col>
         </FormGroup>
         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           tax
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="tax" value={this.state.tax} onChange={this.setValue.bind(this, 'tax')} />
           </Col>
         </FormGroup>

         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           purchasePrice
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="purchasePrice" value={this.state.purchasePrice} onChange={this.setValue.bind(this, 'purchasePrice')} />
           </Col>
         </FormGroup>

         <FormGroup controlId="formHorizontalPassword">
           <Col componentClass={ControlLabel} sm={2}>
           stock
           </Col>
           <Col sm={10}>
             <FormControl type="text" placeholder="stock" value={this.state.stock} onChange={this.setValue.bind(this, 'stock')} />
           </Col>
         </FormGroup>

         <FormGroup>
           <Col smOffset={2} sm={10}>
             <Button type="submit">
               Submit
             </Button>
           </Col>
         </FormGroup>
       </Form>
       </div>
    );
  }
}
