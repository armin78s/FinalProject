import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./store/category-action";
import { fetchProducts } from "./store/product-action";
import { loading } from "./store";
import Loading from "./components/Loading";
import { fetchUser } from "./store/user-action";
import MainPage from "./components/MainPage";
import { Switch, Route } from "react-router-dom";
import Carts from "./components/Cart";
import Nav from "./components/Nav";

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
