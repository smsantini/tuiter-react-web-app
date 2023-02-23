import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './vendors/fontawesome/css/all.css';
// <link href="../../vendors/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
// <link href="../../vendors/bootswatch/bootstrap.min.css" rel="stylesheet"/>
// <link href="../../vendors/fontawesome/css/all.css" rel="stylesheet"/>
// <script src="../../vendors/jquery/jquery-3.6.0.min.js"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
