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
          {CURRENCIES.map((currency, index) => (
              <button
              key={index}
              onClick={() => {
                  this.setState({activeCurrency: index});
              }}
              >
                  {currency.name}
              </button>
          ) )}
          <CurrencyDisplay
              key={activeCurrency}
              id={CURRENCIES[activeCurrency].id}
              name={CURRENCIES[activeCurrency].name}
          />
      </div>
    );
  }
}

export default App;

class CurrencyDisplay extends Component {
    constructor() {
        super();
        this.state = {
            currencyData: null
        };
    }
    componentDidMount() {
        const id = this.props.id;
        const URL = 'https://api.coinmarketcap.com/v1/ticker/' + id + '/';
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({currencyData: json});
        });
    }
    render() {
       const currencyData = this.state.currencyData;
        if(!currencyData) return <div>Loading...</div>;
        return (
            <div>
                <h1>
                    Текущий курс {currencyData[0].name} составляет:
                </h1>
                <p>Цена в долларах за штуку: {currencyData[0].percent_change_1h}</p>
                <p>Цена в биткоинах за штуку: {currencyData[0].price_btc} </p>
                <p>Общая стоимость валюты в долларах: {currencyData[0].market_cap_usd}</p>
                <p>Изменение курса за 1 час (%):  {currencyData[0].percent_change_1h}</p>
                <p>Изменение курса за 1 день (%): {currencyData[0].percent_change_24h}</p>
                <p>Изменение курса за неделю (%): {currencyData[0].percent_change_7d}</p>
            </div>
        );
    }
}
