import { Dispatch } from "@reduxjs/toolkit";
import { userActions } from "./user-slice";

export const fetchUser = () => {
  return async (dispatch:Dispatch ) => {
    const fetchData = async ():Promise<string> => {
      const respone = await fetch(
        "https://fakestoreapi.com/users/1"
      );

      const data = await respone.json();
        
      return data.name.firstname as string;
    };
    const name = await fetchData();

    console.log(name);

    dispatch(
        userActions.init(name)
    )
  };
};