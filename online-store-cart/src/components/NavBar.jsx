import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SvgBag from "../media/svgBag";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>Online Shop</h2>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
          <SvgBag />
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
