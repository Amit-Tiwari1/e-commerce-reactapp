import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const productId = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <h2>this is Product Components</h2>
    </div>
  );
};

export default Product;
