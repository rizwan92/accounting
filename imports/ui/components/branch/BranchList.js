import React, { Component } from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
export default class BranchList extends Component {
  constructor() {
    super();
  }
  render(){
    const styles={
      list:{
         textAlign: 'left',
      }
    }
    return(
       <div>
        <ListGroupItem style={styles.list}><h4>branch1</h4></ListGroupItem>
        <ListGroupItem style={styles.list}><h4>branch1</h4></ListGroupItem>
        <ListGroupItem style={styles.list}><h4>branch1</h4></ListGroupItem>
        <ListGroupItem style={styles.list}><h4>branch1</h4></ListGroupItem>
       </div>
    );
  }
}
