import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <fragment>
        <MyName name="리액트" />
        <Counter />
      </fragment>
    );
  }
}

export default App;
