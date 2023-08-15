import SvgArrowLeft from "../media/svgArrowLeft";
import { Link } from "react-router-dom";

const CartContainer = ({
  cartItems,
  handleRemoveFromCart,
  handleDecreaseCart,
  handleIncreaseCart,
  handleClearCart,
  cartTotalAmount,
}) => {
  return (
    <div>
      <div className="titles">
        <h3 className="product-title">Product</h3>
        <h3 className="price">Price</h3>
        <h3 className="quantity">Quantity</h3>
        <h3 className="total">Total</h3>
      </div>
      <div className="cart-items">
        {cartItems?.map((cartItem) => (
          <div className="cart-item" key={cartItem.id}>
            <div className="cart-product">
              <img src={cartItem.image} alt={cartItem.title} />
              <div>
                <h3>{cartItem.title}</h3>
                <p>{cartItem.description}</p>
                <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
              </div>
            </div>
            <div className="cart-product-price">${cartItem.price.toFixed(2)}</div>
            <div className="cart-product-quantity">
              <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
              <div className="count">{cartItem.cartQuantity}</div>
              <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
            </div>
            <div className="cart-product-total-price">${(cartItem.price * cartItem.cartQuantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <button className="clear-cart" onClick={() => handleClearCart()}>
          Clear Cart
        </button>
        <div className="cart-checkout">
          <div className="subtotal">
            <span>Subtotal</span>
            <span className="amount">${cartTotalAmount.toFixed(2)}</span>
          </div>
          <p>Free Shipping</p>
          <button>Check out</button>
          <div className="continue-shopping">
            <Link to="/">
              <SvgArrowLeft />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
