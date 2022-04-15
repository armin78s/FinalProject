import React, { Fragment, useEffect } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Products from "./components/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./store/category-action";
import { fetchProducts } from "./store/product-action";
import { loading, products } from "./store";
import Loading from "./components/Loading";
import Carts from "./components/Cart";
import { Route, Switch } from "react-router-dom";

function App() {
  const product = useSelector(products);
  const isLoading = useSelector(loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log(product);

  return (
    <Fragment>
      

      <Nav />
      <div className="p-4">
        <Form />
        {isLoading && <Loading />}
        <Products />
      </div>
    </Fragment>
  );
}

export default App;
