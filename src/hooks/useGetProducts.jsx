import React, { useEffect, useState } from 'react';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setProducts(data);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return products;
};

export { useGetProducts };
