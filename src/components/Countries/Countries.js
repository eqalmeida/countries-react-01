import React, { Component } from 'react';

import './Countries.css';

export default class Countries extends Component {
  render() {
    const countries = this.props.countries;
    return (
      <div className="Countries">
        <h4>Países</h4>
        <div className="container">
          {countries.map((country, index) => {
            return <Country key={index} country={country} />;
          })}
        </div>
      </div>
    );
  }
}

class Country extends Component {
  render() {
    const country = this.props.country;
    return (
      <div className="Country">
        <img src={country.flag} alt={country.name} />
        <div>
          <div>{country.name}</div>
          <div>{country.population}</div>
        </div>
      </div>
    );
  }
}
