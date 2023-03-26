import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import redirect from './components/Redirect/Redirect';
import Home from './components/Home/Home';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>

)

export {
  Home
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
