import {  useSelector } from "react-redux";
import {  productsPerCat } from "../store";
import Product from "./Product";

const Products = () => {
  const product = useSelector(productsPerCat);

  return (
    <div className="flex flex-wrap justify-around mt-6">
      {product.map((p) => (
        <Product
          key={p.id}
          title={p.title}
          image={p.image}
          desc={p.description}
          price={p.price}
        />
      ))}
    </div>
  );
};

export default Products;
