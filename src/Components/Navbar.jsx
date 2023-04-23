import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  console.log(items);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">D & T Outlet</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/Cart">
          Cart
        </Link>
        <span className="cartCount"> Cart Count : {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
