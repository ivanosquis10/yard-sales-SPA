import React from 'react';
import logo from '../img/logos/logo_yard_sale.svg';
import icon from '../img/icons/email.svg';
import '../styles/components/_RecoveryPassword.scss';

const RecoveryPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={icon} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export { RecoveryPassword };
