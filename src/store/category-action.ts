import { Dispatch } from "@reduxjs/toolkit";
import { categoryActions } from "./category-slice";

export const fetchCategories = () => {
  return async (dispatch:Dispatch ) => {
    const fetchData = async ():Promise<string[]> => {
      const respone = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const data = await respone.json() as string[];
        
      return data;
    };
    const categories = await fetchData();




    dispatch(
        categoryActions.init(categories)
    )
  };
};
