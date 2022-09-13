import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/products/:id/edit" element={<UpdateProduct/>} />
      </Routes>
    </div>
  );
}

export default App;