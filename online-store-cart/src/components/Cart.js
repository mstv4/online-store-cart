import React from "react";

function Cart({ cartItems, onQuantityIncrease, onQuantityDecrease, onAddProduct, onRemoveItem, totalPrice }) {
  const handleOrder = () => {
    console.log(cartItems);
  };

  const calculateDiscountPercentage = () => {
    if (cartItems.length >= 10) {
      return 10;
    } else if (cartItems.length >= 3) {
      return 7;
    }
    return 0;
  };

  const applyDiscount = () => {
    const discountPercentage = calculateDiscountPercentage();
    return Math.round(totalPrice - (totalPrice * discountPercentage) / 100);
  };

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-wrapper">
          <div>
            <p>{item.name}</p>
            <img src={item.image} alt="Product" width="300px" height="230px" />
            <br></br>
          </div>
          <div className="buttons-wrapper">
            <button onClick={() => onQuantityIncrease(item.id)} className="button-plus">
              +
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => onQuantityDecrease(item.id)} className="button-minus">
              -
            </button>
            <button onClick={() => onRemoveItem(item.id)} className="button-remove">
              Remove
            </button>
          </div>
        </div>
      ))}
      <p>Total Price: ${totalPrice}</p>
      {calculateDiscountPercentage() > 0 && <p>Discount: {calculateDiscountPercentage()}%</p>}
      <p>Final Price: ${applyDiscount()}</p>
      <div>
        <button onClick={onAddProduct} className="button-add">
          Add Product
        </button>
        <button onClick={handleOrder} className="button-order">
          Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
