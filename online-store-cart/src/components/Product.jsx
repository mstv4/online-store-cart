const Products = ({ product, handleAddToCart }) => {
  return (
    <div className="product" key={product.id}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <div className="product-price">
        <span>Price: ${product.price.toFixed(2)}</span>
        <button className="product-price__button" onClick={() => handleAddToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
