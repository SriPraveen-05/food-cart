import React, { useState } from 'react';
import datas from "../assets/Products.json"
import { Product } from './Product';
import "./Home.css"
export const Home = ({cart,setCart}) => {
  const [products] = useState(datas);
  
 

  return (
    <div className="product-container">
      {products.map((product) => (
          <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
      ))}
    </div>
  );
};
