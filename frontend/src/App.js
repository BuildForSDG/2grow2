import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftMenu from './widgets/leftMenu'
import Bureau from './components/regions/bureau'
import Jobs from './components/regions/jobs'

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <Jobs />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;
