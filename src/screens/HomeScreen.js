import React from "react";
import products from "../Products";
import Product from "../components/Product";

export default function HomeScreen() {
  return (
    <div>
      <div className="row justify-content-center">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}
