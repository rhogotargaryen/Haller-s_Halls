import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createExpirationTransform from 'redux-persist-transform-expire';
import itemsReducer from './reducers/itemsReducer'




const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const expireTransform = createExpirationTransform({
    expireKey: 'persistExpiresAt',
    defaultState: {
      auth: ''
    }
  });

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['users'],
    transforms: [expireTransform]
  }
  
const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  items: itemsReducer,
  users: usersReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
)

const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,    
document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
