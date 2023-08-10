import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsFetch } from "../features/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  return (
    <div className="home-container">
      {status === "pending" && <p>Loading...</p>}
      {status === "rejected" && <p>Error loading data.</p>}
      {status === "success" && (
        <>
          <h2>New Arrivals</h2>
          <div className="products"></div>
          {products.map((product) => (
            <div className="product" key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <div className="details">
                <span>{product.description}</span>
                <span className="price">Price: ${product.price}</span>
              </div>
              <button>Add To Cart</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
