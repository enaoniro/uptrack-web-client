import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import UserContextProvider from './contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';
import { Router, Routes, Route, Switch, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  <BrowserRouter>
   <Auth0Provider
    domain="dev-enmb7hr3.eu.auth0.com"
    clientId="mrhHFE5yRac3TLcFmRtTH5sIs7pWjLym"
    redirectUri={window.location.origin}
  >
   <UserContextProvider>
    <Routes> 
        <Route path="/*" element={<App/>} />
    </Routes>
  </UserContextProvider>
  
</Auth0Provider>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
