import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsFetch } from '../features/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  return (
    <div>
      <h2>Home</h2>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'rejected' && <p>Error loading data.</p>}
      {status === 'success' && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;