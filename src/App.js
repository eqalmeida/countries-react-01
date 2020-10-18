import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Countries from './components/Countries/Countries';

export default class App extends Component {
  constructor() {
    super();
    this.formatter = Intl.NumberFormat();
    this.state = {
      countries: [],
      searchText: '',
    };
  }

  async componentDidMount() {
    const resp = await fetch(
      'https://restcountries.eu/rest/v2/all?fields=translations;flag;population'
    );
    const json = await resp.json();
    console.log(json[0]);
    this.setState({
      countries: json.map(({ flag, translations, population }) => {
        return {
          name: translations.br,
          lowerCaseName: translations.br.toLowerCase(),
          population,
          flag,
        };
      }),
    });
  }

  handleSearchChange = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    let countries = this.state.countries;
    const searchText = this.state.searchText.toLowerCase();
    if (searchText.length > 0) {
      countries = countries.filter((country) =>
        country.lowerCaseName.includes(searchText)
      );
    }
    const totalPopulation = countries
      .map((item) => item.population)
      .reduce((acc, curr) => acc + curr, 0);
    const barItems = [
      {
        label: 'Quantidade de países:',
        value: countries.length,
      },
      {
        label: 'População total:',
        value: this.formatter.format(totalPopulation),
      },
    ];
    return (
      <div className="App">
        <TopBar items={barItems} onTextChange={this.handleSearchChange} />
        <Countries countries={countries} />
      </div>
    );
  }
}
