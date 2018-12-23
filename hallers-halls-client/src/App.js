import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
              <SideBar />
              <MainDisplay />

          </React.Fragment>
      </Router>
    );
  }
}

export default connect()(App);
