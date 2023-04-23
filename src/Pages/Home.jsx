import React from "react";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome To The World Of Drip</h2>
      <section>
        <h3> Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
