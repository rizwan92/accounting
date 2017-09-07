import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link, NavLink } from 'react-router-dom';
import  HomePage  from './pages/HomePage';
import  LoginPage  from './pages/LoginPage';
import  ProductMasterPage  from './pages/ProductMasterPage';
import  ProductEntryPage  from './pages/ProductEntryPage';
import  LedgerMasterPage  from './pages/LedgerMasterPage';
import  DashboardPage  from './pages/DashboardPage';
import  CategorySubCategoryPage  from './pages/CategorySubCategoryPage';
import  PurchaseInvoicePage  from './pages/PurchaseInvoicePage';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
  const data = [
    {link:'/', name: 'home'},
    {link:'/login', name: 'Login'},
    {link:'/dashboard', name: 'Dash Board'},
    {link:'/productmaster', name: 'Product Master'},
    {link:'/productentry', name: 'Product Entry'},
    {link:'/ledgermaster', name: 'Ledger Master'},
    {link:'/category', name: 'Category SubCategory'},
    {link:'/purchaseinvoice', name: 'Purchase Invoice'},
  ];
const Links=()=>(
  <div>
  {data.map((dat,i)=>
    <NavLink  activeClassName="selected" key={i} to={dat.link}><ListGroupItem className="mysidelinklis" onClick={()=> {}} >{dat.name}</ListGroupItem></NavLink>
  )}
  </div>
);
export default class App extends Component {
  render(){
   return (
     <Router>
     <div>
     <div className="container-fluid" >
         <Row  style={{marginTop:50}}>
           <Col sm={2} className="nopadding" >
           <Links  />
            </Col>
            <Col sm={8} style={{paddingTop:20}} >
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/productmaster" component={ProductMasterPage} />
            <Route exact path="/productentry" component={ProductEntryPage} />
            <Route exact path="/ledgermaster" component={LedgerMasterPage} />
            <Route exact path="/category" component={CategorySubCategoryPage} />
            <Route exact path="/purchaseinvoice" component={PurchaseInvoicePage} />
             </Col>
         </Row>
     </div>


     </div>
     </Router>
   )
 }
}
