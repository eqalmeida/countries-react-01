import React, { Component } from 'react';
import './TopBar.css';

export default class TopBar extends Component {
  handleSearchChange = (event) => {
    this.props.onTextChange(event.target.value.trim());
  };

  render() {
    const items = this.props.items;
    return (
      <div className="TopBar">
        <input
          type="text"
          placeholder="Filtrar"
          className="TopBarItem"
          onChange={this.handleSearchChange}
        />
        {items.map(({ label, value }, index) => {
          return <BarIndicator key={index} label={label} value={value} />;
        })}
      </div>
    );
  }
}

class BarIndicator extends Component {
  render() {
    const { label, value } = this.props;
    return (
      <div className="TopBarItem">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    );
  }
}
