import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";

const Header = () => {
  // const [{ basket }, disptach] = useStateValue();
  return (
    <>
      <nav className="Header">
        {/* logo on the left side image */}
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
            className="header_logo"
          />
        </Link>
        {/* Search Box */}
        <div className="Search">
          <input type="text" className="Search_input" />
          <SearchIcon className="Search_icon" />
        </div>
        {/* 1st-Link */}
        <div className="Header_Link">
          <Link to="/login" className="Header_node">
            <div className="Header_option">
              <span className="Header_firstline">Hello,</span>
              <span className="Header_secondline">Sign in</span>
            </div>
          </Link>

          {/* 2nd-Link */}

          <Link to="/checkout" className="Header_node">
            <div className="Header_option">
              <span className="Header_firstline">Returns</span>
              <span className="Header_secondline">& Orders</span>
            </div>
          </Link>

          {/* 3rd-Link */}
          <Link to="/login" className="Header_node">
            <div className="Header_option">
              <span className="Header_firstline">Your</span>
              <span className="Header_secondline">Prime</span>
            </div>
          </Link>
        </div>
        <Link to="/checkout">
          <div className="Header_Shoping_icon">
            <ShoppingBasketIcon />
            <span className="Header_icon_number">0</span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Header;
