import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SharedComponent from 'shared/src/SharedComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey I'm App one
          </p>
          <SharedComponent />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React

          </a>
        </header>
      </div>
    );
  }
}

export default App;
