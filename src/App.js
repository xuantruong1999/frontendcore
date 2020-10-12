import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import './index.js';
import Product from './function/Product';

function App() {
  return (
    <div className="container mt-2">
        <Product name="Iphone" description="this is demo balalalala" image="https://product.hstatic.net/1000391896/product/iphone-8-plus-dai-loan-loai-1-23-800x800_17133c6f90bb4bc3b9e4a566fae32605_grande.jpg" price="15000000"/>
    </div>
    
  );
}

export default App;
