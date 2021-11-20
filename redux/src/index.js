import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// const initialState = 0;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch({type: 'INC'});
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch({type: 'DEC'});
});



// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

ReactDOM.render(
  <React.StrictMode>
    
  </React.StrictMode>,
  document.getElementById('root')
);

