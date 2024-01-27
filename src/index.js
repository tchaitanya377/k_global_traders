import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/About';
import Products from './components/products';
import Contact from './components/contact';
import Collaborate from './components/Collaborate';
// import Testimonies from './components/Testimonies';
import ImportProduct from './components/importProduct';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collaborate" element={<Collaborate />} />

        {/* <Route path="/testimonies" element={<Testimonies />} /> */}
        <Route path="/importProducts" element={<ImportProduct />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
