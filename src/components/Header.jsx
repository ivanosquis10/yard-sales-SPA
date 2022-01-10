import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from './Menu';
import { MyOrder } from '../containers/MyOrder';

import { AppContext } from '../context/AppContext';

import '../styles/components/_Header.scss';

import logo from '@logos/logo_yard_sale.svg';
import iconCart from '@icons/icon_shopping_cart.svg';
import iconMenu from '@icons/icon_menu.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="nav">
      <img src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-left" />
        </Link>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={iconCart} alt="shopping cart" />

            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export { Header };
