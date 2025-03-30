import React, { createContext, useEffect, useState } from 'react'
import { fetchCart, fetchProducts } from '../api';

export const ProductContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(res => {
        console.log("PRODUCTS:", res.products);
        setProducts(res.products);
        setFilteredProducts(res.products)
      })
    fetchCart()
      .then(res => setCarts(res))
  }, [])

  return <ProductContext.Provider value={{ products, setProducts, carts, setCarts, filteredProducts, setFilteredProducts }}>
    {children}
  </ProductContext.Provider>
}


export default ContextProvider;