import React from 'react';
import ReactDOM from 'react-dom';

const initialState = 0;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }
}

let state = reducer(initialState, {type: 'INC'});
state = reducer(state, {type: 'INC'});
state = reducer(state, {type: 'INC'});
console.log(state);

ReactDOM.render(
  <React.StrictMode>
    
  </React.StrictMode>,
  document.getElementById('root')
);

