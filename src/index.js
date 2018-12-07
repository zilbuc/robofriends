import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider passes the store down to the App
import { createStore } from 'redux';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
import 'tachyons';
//import { robots } from './robots';

// REDUX store - uses reducer(s) to create the store
const store = createStore(searchRobots) // should be called rootReducer if more than one reducer

ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
