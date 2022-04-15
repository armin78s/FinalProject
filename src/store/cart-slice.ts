import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart from "../types/cart";
import Product from "../types/product";

const initialState :{carts : Cart[]} = {
    carts : []
}

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers : {
        addToCart (state , action: PayloadAction<Product>){
            const item = action.payload;
            state.carts.push({
                id:item.id,
                title:item.title,
                description:item.description,
                quantity:2,
                price:item.price
            })
        },
       
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;