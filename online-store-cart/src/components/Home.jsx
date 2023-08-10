import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsFetch } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="home-container">
      {status === "pending" && <span class="loader"></span>}
      {status === "rejected" && <span class="error-data">Error loading data.</span>}
      {status === "success" && (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <div className="product-price">
                  <span>Price: ${product.price}</span>
                  <button className="product-price__button" onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
