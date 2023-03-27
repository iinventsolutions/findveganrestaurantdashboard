import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@aws-amplify/ui-react/styles.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AmplifyProvider } from '@aws-amplify/ui-react';
import { RestaurantContexProvider } from './Contexts/RestaurantContext';
import { RestaurantOwnerContextProvider } from './Contexts/RestaurantOwnerContext';
import { OrderContextProvider } from './Contexts/OrderContex';
import { AuthContextProvider } from './Contexts/AuthContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <AmplifyProvider>
  //<Router>
  <AuthContextProvider>
    <RestaurantContexProvider>
      <RestaurantOwnerContextProvider>
        <OrderContextProvider>
          <App />
        </OrderContextProvider>
      </RestaurantOwnerContextProvider>
    </RestaurantContexProvider>
  </AuthContextProvider>
  //</Router>
  // </AmplifyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
