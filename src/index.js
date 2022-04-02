import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './App.css';
// import Navbar from './Navbar';
import { BrowserRouter } from "react-router-dom";
import App from './App'

ReactDOM.render(
  <>
    {/* <Navbar /> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </>,
  document.getElementById('root')
);
