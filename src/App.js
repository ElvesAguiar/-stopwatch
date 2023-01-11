import React, { Component } from "react";
import './style.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberClock: 0,
      buttonText: 'VAI'
    };

    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);

  }

  start() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.buttonText = 'VAI';
    } else {
      this.timer = setInterval(() => {
        state.numberClock += 0.1;

        this.setState(state);
      }, 100);
      state.buttonText = 'PAUSAR';
    };

    this.setState(state);
  };

  clear() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    };

    let state = this.state;
    state.numberClock = 0;
    state.buttonText = 'VAI';
    this.setState(state);


  };


  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} />
        <a className="timer">{this.state.numberClock.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="button" onClick={this.start}>{this.state.buttonText}</a>
          <a className="button" onClick={this.clear}>LIMPAR</a>
        </div>
      </div>);
  };
};

export default App;
