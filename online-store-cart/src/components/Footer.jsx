import { Link } from "react-router-dom";
import SvgLogo from "../media/svgLogo";
import SvgTwitter from "../media/svgTwitter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="brand">
        <div>
          <Link to="https://github.com/mstv4" target="_blank" className="brand-logo">
            <SvgLogo />
            <p>mstv4</p>
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusantium?</p>
        <div className="social-links">
          <SvgTwitter />
          <SvgTwitter />
          <SvgTwitter />
          <SvgTwitter />
        </div>
      </div>
      <div className="about">
        <ul>
          <p>About</p>
          <Link to="/">
            <li>About Us</li>
          </Link>
          <Link to="/">
            <li>Find Store</li>
          </Link>
          <Link to="/">
            <li>Categories</li>
          </Link>
          <Link to="/">
            <li>Blogs</li>
          </Link>
        </ul>
      </div>
      <div className="partnership">
        <ul>
          <p>Partnership</p>
          <Link to="/">
            <li>About Us</li>
          </Link>
          <Link to="/">
            <li>Find Store</li>
          </Link>
          <Link to="/">
            <li>Categories</li>
          </Link>
          <Link to="/">
            <li>Blogs</li>
          </Link>
        </ul>
      </div>
      <div className="information">
        <ul>
          <p>Information</p>
          <Link to="/">
            <li>About Us</li>
          </Link>
          <Link to="/">
            <li>Find Store</li>
          </Link>
          <Link to="/">
            <li>Categories</li>
          </Link>
          <Link to="/">
            <li>Blogs</li>
          </Link>
        </ul>
      </div>
      <div className="download">
        <ul>
          <p>Download</p>
          <Link to="/">
            <li>About Us</li>
          </Link>
          <Link to="/">
            <li>Find Store</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
