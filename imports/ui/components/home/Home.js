import React, { Component } from 'react';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';
import  BusinessEntry  from '../verification/BusinessEntry';
import  CreateBranch  from '../verification/CreateBranch';
import  AccountDetail  from '../verification/AccountDetail';
 export default class Home  extends Component {
  constructor(props) {
    super(props);
      this.state={
            globalstate:0,
      }
  }

handlestate(){
    this.forceUpdate();
}
  render(){
    return(
       <div>
      {
          Meteor.userId() ?
            Meteor.user().profile.business.bname=='' ?

          <BusinessEntry handlestate={this.handlestate.bind(this)}/> :

          Meteor.user().profile.business.branches.length==0 ?

          <CreateBranch /> :

          Meteor.user().profile.business.branches[0].accountDetail.length==0?

          <AccountDetail />:

            Meteor.user().profile.business.branches[0].accountDetail.length
              :
                window.location.href = '/login'

    }
       </div>
    );
  }
}
