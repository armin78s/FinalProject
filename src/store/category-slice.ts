import { createSlice,PayloadAction  } from "@reduxjs/toolkit";

const initialState: {categories :string [],currentCat:string} = {
    categories : [],
    currentCat : "all"
  };
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers :{
        init : (state, action: PayloadAction<string []>) => {
            state.categories = action.payload;
        },
        categoryChange : (state,action: PayloadAction<string >) =>{
            state.currentCat = action.payload;
        }
    }

});

export const categoryActions = categorySlice.actions;

export default categorySlice;