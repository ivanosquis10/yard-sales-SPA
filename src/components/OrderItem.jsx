import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/components/_OrderItem.scss';

import close from '@icons/icon_close.png';

const OrderItem = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index);
    // console.log(product, index, product.id);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        className="icon-close"
        src={close}
        alt="close"
        onClick={() => handleRemove(indexValue)}
      />
    </div>
  );
};

export { OrderItem };
