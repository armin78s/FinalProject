import { Dispatch } from "@reduxjs/toolkit";
import useHttp from "../hook/use-http";
import Product from "../types/product";
import { loadingActions } from "./loading-slice";
import { productActions } from "./products-slice";

export const fetchProducts = () => {
  return async (dispatch:Dispatch ) => {
    dispatch(loadingActions.toggle());
    const { fetchData } = useHttp<Product[]>(
      "https://fakestoreapi.com/products"
    );
    const products = await fetchData();
    dispatch(loadingActions.toggle());

    dispatch(
        productActions.init(products)
    );
  };
};
