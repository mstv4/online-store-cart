import SvgArrowLeft from "../media/svgArrowLeft";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <p>Your cart is empty</p>
      <div className="start-shopping">
        <Link to="/">
          <SvgArrowLeft />
          <span>Start Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
