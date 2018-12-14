import React, { Component } from 'react';
import UsersContainer from './components/user/users_container'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersContainer />
      </div>
    );
  }
}

export default App;
