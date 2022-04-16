import React from "react";
import {  useSelector } from "react-redux";
import {  productsPerCat } from "../store";
import ProductItem from "./ProductItem";

const Products = () => {
  const product = useSelector(productsPerCat);

  return (
    <div className="flex flex-wrap justify-around mt-6 p-2">
      {product.map((p) => (
        <ProductItem
          key={p.id}
         product = {p}
        />
      ))}
    </div>
  );
};

export default Products;
