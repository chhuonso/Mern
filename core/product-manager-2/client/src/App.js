import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </div>
  );
}

export default App;