import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="cartWrapper">
      <h2>Items</h2>
      {items.map((product) => (
        <div className="cartCard" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleRemove(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
