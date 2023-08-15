import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart, decreaseCart, removeFromCart, clearCart, getTotals } from "../features/cartSlice";
import CartEmpty from "./CartEmpty";
import CartContainer from "./CartContainer";

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
        <CartEmpty />
      ) : (
        <CartContainer
          cartItems={cart.cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          handleDecreaseCart={handleDecreaseCart}
          handleIncreaseCart={handleIncreaseCart}
          handleClearCart={handleClearCart}
          cartTotalAmount={cart.cartTotalAmount}
        />
      )}
    </div>
  );
};

export default Cart;
