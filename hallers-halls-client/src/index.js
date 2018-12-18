import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginComponent from './components/user/login';
import { createStore } from 'redux';
import userReducer from './reducers/user';
import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  user: loginReducer,
  users: usersReducer
});
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(<Provider state={store}> (
<Router>
    <React.Fragment>
        <Route exact path="/" component={App} />
        <Route exact path='/login' component={LoginComponent}/>
    </React.Fragment>
</Router>) </Provider>,    
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
