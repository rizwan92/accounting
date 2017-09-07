import React, { Component } from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/lib/Button';
//import AddBranchModal from '../branch/AddBranchModal';
 class Header extends Component {
  constructor(){
    super();
    this.state={ smShow: false }
  }
  logoutHandle(){
    Meteor.logout();
    this.props.history.push('/');
  }
  loginHandle(){
      this.props.history.push('/login');
  }
  reload(){
  window.location.reload();
}
  render() {
    let smClose = () => this.setState({ smShow: false });
    return (
      <div className="header">
          <div className="headeritem one"><h3><a style={{color:'#40c4ff'}} onClick={this.reload.bind(this)}>{this.props.name}</a></h3></div>
          <div className="headeritem"></div>
          <div className="headeritem three">
          {
            Meteor.userId() ?
            <Button bsStyle="link" onClick={this.logoutHandle.bind(this)}>Logout</Button>
            :
            <Button bsStyle="link" onClick={this.loginHandle.bind(this)}>LogIn</Button>
          }
          </div>
      </div>
    );
  }
}
export default withRouter(Header);
