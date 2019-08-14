import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {reducer} from './reducers';
import {Provider} from 'react-redux';


import 'bulma/css/bulma.css';
import './styles.scss';

//step 1: create a store
export const store = createStore(reducer);
console.log('this is the store', store);


const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
rootElement

);
