import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Johny',
        age: 24
      }, 
      {
        name: 'Johny2',
        age:34
      }
    ]
    return (
      <div className="App">
        <h1>Hello</h1>
        <Table characterData = {characters} />
      </div>
    )
  }
}

export default App