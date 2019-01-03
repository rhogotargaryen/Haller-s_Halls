import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux'
import SideBar from './components/layout/side_bar'
import HeadDisplay from './components/layout/head_display'
import MainDisplay from './components/layout/main_display'


class App extends Component {

  render() {
    return (
      <Router>
          <React.Fragment>
              <HeadDisplay />
                <div className="container" syle='height: 100vh'>
                  <div className="row" >
                  <SideBar auth={this.props.auth} user={this.props.user}/>
                  <MainDisplay />
                </div>
              </div>
          </React.Fragment>
      </Router>
    );
  }

}

export default connect(state => {return {auth: state.login.auth, user: state.user}})(App);
