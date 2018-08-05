import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';

import productsReducer from './products-reducer';
import userReducer from './user-reducer';

const userProductReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})

const store = createStore(
    userProductReducers, 
    {
        products: 
        [
        	{name: 'iphone x'}
        ],
        user: 'Tommy'
    },
    window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());



ReactDOM.render(<Provider store={store}><App passProp="whatever"/></Provider>, document.getElementById('root'));

