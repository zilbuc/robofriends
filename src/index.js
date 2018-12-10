import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider passes the store down to the App
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'; // Middleware
import thunkMiddleware from 'redux-thunk'; // Middleware
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })

// REDUX store - uses reducer(s) to create the store (function)
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)) // rootReducer is used if more than one reducer; otherwise use the reducer name

ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
