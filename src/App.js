import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

const users = [
  {firstName: 'Joe', LastName: 'Bloggs', username: 'jbloggs', numGamesPlayed: 0},
  {firstName: 'John', LastName: 'Doe', username: 'jdoe', numGamesPlayed: 5},
  {firstName: 'Eat', LastName: 'Summore', username: 'user123', numGamesPlayed: 10},
];

class App extends Component {
  render() {



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
