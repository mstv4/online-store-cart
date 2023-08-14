import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { addToCart, decreaseCart, removeFromCart, clearCart, getTotals } from "../features/cartSlice";
import SvgArrowLeft from "../media/svgArrowLeft";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <div className="start-shopping">
            <Link to="/">
              <SvgArrowLeft />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
        
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>{cartItem.description}</p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price.toFixed()}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                </div>
                <div className="cart-product-total-price">${cartItem.price.toFixed() * cartItem.cartQuantity}</div>
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
                <span className="amount">${cart.cartTotalAmount.toFixed()}</span>
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
        
      )}
    </div>
  );
};

export default Cart;
