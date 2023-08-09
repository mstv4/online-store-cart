import React, { useState } from "react";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";

function App() {
  const getRandomImage = () => {
    const images = [
      "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2643698/pexels-photo-2643698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const [cartItems, setCartItems] = useState([
    {
      id: uuidv4(),
      name: "Product 1",
      quantity: 1,
      price: generateRandomPrice(),
      image: getRandomImage(),
    },
  ]);

  const handleQuantityIncrease = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleQuantityDecrease = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: uuidv4(),
      name: generateUniqueProductName(),
      quantity: 1,
      price: generateRandomPrice(),
      image: getRandomImage(),
    };
    setCartItems([...cartItems, newProduct]);
  };

  const handleRemoveItem = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  function generateRandomPrice() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function generateUniqueProductName() {
    let newName = `Product ${cartItems.length + 1}`;
    let existingNames = cartItems.map((item) => item.name);
    let suffix = 1;
    while (existingNames.includes(newName)) {
      newName = `Product ${cartItems.length + 1} (${suffix})`;
      suffix++;
    }
    return newName;
  }

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="wrapper">
      <Cart
        cartItems={cartItems}
        onQuantityIncrease={handleQuantityIncrease}
        onQuantityDecrease={handleQuantityDecrease}
        onAddProduct={handleAddProduct}
        onRemoveItem={handleRemoveItem}
        totalPrice={totalPrice}
      />
      <div className="product-wrapper">
        {cartItems.map((item) => (
          <Product key={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
