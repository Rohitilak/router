import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import User from './User';
import Product from './Product';
import { createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById
  ('root'));

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
    {
      path : '/Contact',
    element : <Contact/>
    },
    {
      path : '/About',
      element : <About/>
    },
    {
      path : 'products/:smartPhone',
      element : <Product/>
    }
  ])
root.render(
  <React.StrictMode>
  <RouterProvider router={router} basename='/router'></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
