import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home';
import About from './components/About';
import Products from './components/products.js';
import Contact from './components/contact';
import Testimonies from './components/testimonies.js';
const router = createBrowserRouter([
  { path: '/', 
    element:<Home />
  },

  { path: '/about', 
    element:<About />
  },

  { path: '/products', 
    element:<Products />
  },

  { path: '/contact', 
    element:<Contact />
  },

  { path: '/testimonies', 
    element:<Testimonies />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
