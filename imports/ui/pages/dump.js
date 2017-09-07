import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

import Col from 'react-bootstrap/lib/Col';
import React, { Component } from 'react';
export default class dump extends Component {
  constructor() {
    super();
  }
  render(){
    return(
       <div>
         <Button bsStyle="success" onClick={()=>this.setState({ smShow: true })}>+Branch</Button>
            <AddBranchModal show={this.state.smShow} onHide={smClose}  />
       </div>
    );
  }
}


let isBusiness=this.state.isBusiness;
var user= Meteor.user();
      if (user) {
      console.log(user);
  if(user.profile.business.bname==''){
    console.log('if');
  }else{
    console.log('else');
    this.setState=({
          isBusiness:!this.state.isBusiness
    });
  }
}
============================================================================
import React, { Component } from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
export default class PurchaseInvoice  extends Component {
  constructor() {
    super();
      this.state={
            text:'',
      }
  }
  onChnagehandle(event){
  let mytext=event.target.value;
  this.setState({text:mytext});
}
  render(){
     let text=this.props.ledgeres.filter(
       (ledgere)=>{
       return (ledgere.name.toLowerCase().indexOf(this.state.text.toLowerCase()) !==-1);
     }
   );
    return(
       <div>
       <FormControl type="text" placeholder=""
        onChange={this.onChnagehandle.bind(this)}  required/>
          {text.map(
            (text, i)=> {
                return(<div key={i}>{text.name}</div>);
            }
          )}
       </div>
    );
  }
}

============================================================================
