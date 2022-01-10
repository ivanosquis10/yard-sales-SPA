import React, { useContext } from 'react';
import { OrderItem } from '../components/OrderItem';
import { AppContext } from '../context/AppContext';

import '../styles/components/_MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  // const sumTotal = () => {
  //   const reducer = (accumulator, currentValue) =>
  //     accumulator + currentValue.price;
  //   const sum = state.cart.reduce(reducer, 0);
  //   return sum;
  // };

  const sumTotal = () => {
    let total = 0;
    state.cart.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <div>
          <img src={arrow} alt="icon arrow" />
        </div>
        <p className="title-order">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product, index) => (
          <OrderItem product={product} key={index} indexValue={index} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export { MyOrder };
