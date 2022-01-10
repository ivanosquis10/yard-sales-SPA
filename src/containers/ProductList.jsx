import React, { useState } from 'react';

import { ProductItem } from '../components/ProductItem';
import { useGetProducts } from '../hooks/useGetProducts';

import '../styles/components/_ProductList.scss';

// const API = 'https://api.escuelajs.co/api/v1/products';
const API = 'https://api.escuelajs.co/api/v1/products?limit=15&offset=1';

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export { ProductList };
