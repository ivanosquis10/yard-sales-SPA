import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/components/_ProductItem.scss';

import icon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
    // console.log(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={icon} alt="button add to cart" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
