import { Dispatch } from "@reduxjs/toolkit";
import useHttp from "../hook/use-http";
import Product from "../types/product";
import { loadingActions } from "./loading-slice";
import { productActions } from "./products-slice";

export const fetchProducts = () => {
  return async (dispatch:Dispatch ) => {
    const { fetchData } = useHttp<Product[]>(
      "https://fakestoreapi.com/products"
    );
    const products = await fetchData();


    dispatch(
        productActions.init(products)
    )
  };
};
