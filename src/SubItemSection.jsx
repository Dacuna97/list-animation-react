import React, { Component } from 'react';

export default class SubItemSection extends Component {
  render() {
    const { item, index, expand } = this.props;
    return (
      <div className={`item sub-item ${expand ? 'show' : 'hide'}`}>
        <h3>{item}</h3>
      </div>
    );
  }
}
