import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import NonReactStatics from 'hoist-non-react-statics'
import WrapperContext from './config/WrapperContext';


ReactDOM.render(
  <WrapperContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WrapperContext>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
