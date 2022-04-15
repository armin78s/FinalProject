import { Dispatch } from "@reduxjs/toolkit";
import useHttp from "../hook/use-http";
import { categoryActions } from "./category-slice";

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    const { fetchData } = useHttp<string[]>(
      "https://fakestoreapi.com/products/categories"
    );

    const categories = await fetchData();

    dispatch(categoryActions.init(categories));
  };
};
