import React, { Component } from 'react';
import SubItemSection from './SubItemSection';
export default class Section extends Component {
  state = {
    expandSubSection: false
  };

  onExpand = () => {
    const { expandSubSection } = this.state;
    this.setState({ expandSubSection: !expandSubSection });
  };

  render() {
    const { item, index, subItems, expand } = this.props;
    const { expandSubSection } = this.state;
    return (
      <div className={`item ${expand ? 'show' : 'hide'}`} onClick={this.onExpand}>
        <h2>{item}</h2>
        <div className={`list-items ${expandSubSection ? 'list-items-show' : 'list-items-hide'}`}>
          {subItems.map((subItem, index2) => (
            <SubItemSection item={subItem} index={index2} expand={expandSubSection} key={index2} />
          ))}
        </div>
      </div>
    );
  }
}
