
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'; 
// import store from '../store'; 
// import App from './App';
// import './styles.css';

// ReactDOM.render(
//   <Provider store={store}> 
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from '../store';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
