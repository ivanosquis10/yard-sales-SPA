import React from 'react';
import '../styles/components/_NotFound.scss';

const NotFound = () => {
  return (
    <div className="notFound">
      <img
        src="https://cdn.custom-cursor.com/packs/470/pack430.png"
        alt="error404"
      />
      <p>I'm sorry....</p>
      <p>ERROR 404</p>
    </div>
  );
};

export { NotFound };
