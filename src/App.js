import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const CURRENCIES = [
    {name: "Bitcoin", id: "bitcoin"},
    {name: "Ethereum", id: "ethereum"},
    {name: "Ripple", id: "ripple"},
    {name: "Bitcoin-cash", id: "bitcoin-cash"},
    {name: "EOS", id: "eos"},
    {name: "Litecoin", id: "litecoin"},
    {name: "Stellar", id: "stellar"},
    {name: "Cardano", id: "cardano"},
    {name: "TRON", id: "tron"},
    {name: "IOTA", id: "iota"},
];

class App extends Component {
    constructor() {
        super();
        this.state = {
            activeCurrency: 0,
        }
    }
  render() {
      const activeCurrency = this.state.activeCurrency;
    return (
      <div className="App">
       <CurrencyDisplay id={"bitcoin"} />
          {CURRENCIES.map((currency, index) => (
              <button
              key={index}
              onClick={() => {
                  console.log("Clicked index " +index);
              }}
              >
                  {currency.name}
              </button>
          ) )}
          <CurrencyDisplay
              key={activeCurrency}
              id={CURRENCIES[activeCurrency].id}
          />
      </div>
    );
  }
}

export default App;

class CurrencyDisplay extends Component {
    render() {
        return (
            <h1>Showing currency rate for {this.props.id} </h1>
        );
    }
}

