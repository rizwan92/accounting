import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Header from '../components/header/Header';
import CircularProgressbar from 'react-circular-progressbar';
import Home from '../components/home/Home';
class HomePage  extends Component {
  constructor() {
    super();

  }
  render(){
    return(
       <div>
       <Header name="Accounting" />
       {this.props.loading ?    <CircularProgressbar percentage={100} initialAnimation/> :
               <Home  />

        }

       </div>
    );
  }
}
export default createContainer(() => {
  const todosHandle = Meteor.subscribe('users');
    const loading = !todosHandle.ready();
  return {
    loading,
  };
}, HomePage);
