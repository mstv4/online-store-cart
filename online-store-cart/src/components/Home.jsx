import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productsFetch } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";
import Products from "./Product";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleAddToCartAndClose = (product) => {
    dispatch(addToCart(product));    
  };

  return (
    <div className="home-container">
      {status === "pending" && <span className="loader"></span>}
      {status === "rejected" && <span className="error-data">Error loading data.</span>}
      {status === "success" && (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {products.map((product) => (
              <Products
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                handleAddToCartAndClose={handleAddToCartAndClose}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
