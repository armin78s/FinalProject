import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../types/product";

const initialState: { products: Product[]; productPerCat: Product[] } = {
  products: [],
  productPerCat: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.productPerCat = action.payload;
    },
    catchange: (state, action: PayloadAction<string>) => {
      if(action.payload === "all"){
        state.productPerCat = state.products;
      }
      else{
        state.productPerCat = state.products.filter(
          (p) => p.category === action.payload
        );
      }
     
    },
    charChange: (state, action: PayloadAction<string>) => {
      state.productPerCat = state.productPerCat.filter((p) =>
        p.title.includes(action.payload)
      );
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
