import React, { Component } from 'react';
import UsersContainer from './components/user/users_container'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginComponent from './components/user/login';
import { connect } from 'react-redux'
import LogoutComponent from './components/user/logout'


class App extends Component {

  componentDidMount() {
 }

  render() {
    return (
      <Router>
          <React.Fragment>
              <Route exact path="/" render={() => <UsersContainer />} />
              <Route exact path='/login' render={() => <LoginComponent />}/>
              <Route exact path='/logout' render={() => <LogoutComponent/>}/>
          </React.Fragment>
      </Router>
    );
  }
}

export default connect()(App);
