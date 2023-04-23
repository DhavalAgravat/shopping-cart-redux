import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { setProducts } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  console.log(products);
  //   const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  console.log(products.status);

  switch (products.status) {
    case "loading": {
      return <h2>Loading</h2>;
    }
    case "idle": {
      return (
        <div className="productsWrapper">
          {products.data.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button onClick={() => handleAdd(product)} className="btn">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      );
    }
    case "error": {
      return <h2>ERROR</h2>;
    }
  }
};

export default Products;
