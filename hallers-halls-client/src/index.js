import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginComponent from './components/user/login';
import { createStore, compose, applyMiddleware } from 'redux';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';
import { combineReducers } from "redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: loginReducer,
  user: userReducer,
  users: usersReducer
});
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(<Provider store={store}>
<Router>
    <React.Fragment>
        <Route exact path="/" render={(props) => <App {...props}/>} />
        <Route exact path='/login' render={(props) => <LoginComponent {...props}/>}/>
    </React.Fragment>
</Router> </Provider>,    
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
