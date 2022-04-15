import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart from "../types/cart";
import Product from "../types/product";

const initialState: { carts: Cart[] , totalPrice:number} = {
  carts: [],
  totalPrice : 0
  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const findItem = state.carts.find(
        (c) => c.id === item.id
      ) as Cart;
      if(! findItem){
      state.carts.push({
        id: item.id,
        title: item.title,
        description: item.description,
        quantity: 1,
        price: item.price,
      });
      state.totalPrice = state.totalPrice+ item.price;
    }else {
      findItem.quantity = findItem.quantity + 1;
      state.totalPrice = state.totalPrice+ findItem.price;
    }
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const item: Cart = state.carts.find(
        (c) => c.id === action.payload
      ) as Cart;

      item.quantity = item.quantity + 1;
      state.totalPrice = state.totalPrice + item.price;
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item: Cart = state.carts.find(
        (c) => c.id === action.payload
      ) as Cart;
      if (item.quantity !== 1) {
        item.quantity = item.quantity - 1;
        state.totalPrice = state.totalPrice - item.price;
      }
    },
    deleteItem(state, action: PayloadAction<number>) {
      const item: Cart = state.carts.find(
        (c) => c.id === action.payload
      ) as Cart;
      const price:number = item.quantity * item.price;
      state.carts = state.carts.filter((c) => c.id !== action.payload);
      state.totalPrice = state.totalPrice - price;
      
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
