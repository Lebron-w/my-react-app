import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

import Nav from './components/nav.js';
function fnClick (e) {
  console.log(e)
}
function Footer (props) {
  return (
    <div onClick={fnClick}>{props.name}</div>
  )
}
class Header extends Component {
  render () {
    return <div>{this.props.age}</div>
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Footer name='666'/>
        <Header age='25'/>
        <Nav navId="1234"/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
