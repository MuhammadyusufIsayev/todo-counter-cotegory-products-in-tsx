import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchProducts } from './ProductsSlice';
import "./Products.css";

const Products: React.FC = () => {
  const { products, loading } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {loading ? <p>Loading...</p> : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} width="50" />
              <div>{product.title}</div>
              <div>${product.price}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
