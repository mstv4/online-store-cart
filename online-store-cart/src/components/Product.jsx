import { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTotals } from "../features/cartSlice";

Modal.setAppElement("#root");

const Products = ({ product, handleAddToCart, handleAddToCartAndClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="product" key={product.id}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <div className="product-price">
        <span>Price: ${product.price.toFixed(2)}</span>
        <button className="product-price__button" onClick={openModal}>
          Add To Cart
        </button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
          <div className="modal-content">
            <p>Do you want to continue shopping or go to cart?</p>
            <div className="modal-button">
              <button
                onClick={(e) => {
                  closeModal();
                  handleAddToCartAndClose(product);
                }}
              >
                Continue shopping
              </button>
              <button onClick={() => handleAddToCart(product)}>Go to cart</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Products;
