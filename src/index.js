import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rendermain from './Rendermain';
import 'react-transition-group';
import { ThemeProvider, StyleReset } from 'atomize';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import "./CNAME";


ReactDOM.render(
    <ThemeProvider>
      <StyleReset />
      <BrowserRouter><Rendermain /></BrowserRouter>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
