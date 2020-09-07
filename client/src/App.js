import React from 'react';
import './App.css';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="container mt-5 bg-white rounded-lg p-5">
      <h1 className="m-auto">Product Logger</h1>
      <p>Welcome to productLogger, here are your products, </p>
      <ProductForm/>
      
    </div>
  );
}

export default App;
