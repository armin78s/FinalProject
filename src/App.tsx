import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./store/category-action";
import { fetchProducts } from "./store/product-action";
import { loading } from "./store";
import { fetchUser } from "./store/user-action";
import MainPage from "./components/MainPage";
import { Switch, Route } from "react-router-dom";
import Carts from "./components/Cart";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isLoading = useSelector(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Fragment>
      <ToastContainer position="top-right"/>
      {!isLoading && <Nav />}

      <Switch>
        <Route path="/cart">
          <Carts />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
