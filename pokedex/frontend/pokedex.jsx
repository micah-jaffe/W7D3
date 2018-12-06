import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(
    <h1>hello</h1>,
    rootEl
  );
})
  

// TESTING 
import { receiveAllPokemon } from './actions/pokemon_actions';
import fetchAllPokemon from './util/api_util';
const store = configureStore();
window.getState = store.getState;
window.dispatch = store.dispatch;
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
