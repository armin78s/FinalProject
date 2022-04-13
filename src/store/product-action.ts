import { Dispatch } from "@reduxjs/toolkit";
import Product from "../types/product";
import { loadingActions } from "./loading-slice";
import { productActions } from "./products-slice";

export const fetchProducts = () => {
  return async (dispatch:Dispatch ) => {
    const fetchData = async ():Promise<Product[]> => {

      dispatch(loadingActions.toggle());
      const respone = await fetch(
        "https://fakestoreapi.com/products"
      );

      const data = await respone.json() as Product[];
      dispatch(loadingActions.toggle());
      return data;
    };
    const products = await fetchData();


    dispatch(
        productActions.init(products)
    )
  };
};
