import React, { Component } from 'react';
export default class MainLayout extends Component {
  render() {
    return (
        <div>
        {this.props.content}
        </div>
    );
  }
}
