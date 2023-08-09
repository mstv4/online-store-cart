import React from "react";

function Product({ name, price, image }) {
  return (
    <div className="product">
      <p>Price: ${price}</p>
    </div>
  );
}

export default Product;
