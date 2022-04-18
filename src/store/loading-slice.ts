import { createSlice } from "@reduxjs/toolkit";

const initialState: {isLoading :boolean} = {
    isLoading : false,
  };
const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers :{
        toggle :(state) => {
            state.isLoading = !state.isLoading;
        }
    }

});

export const loadingActions = loadingSlice.actions;

export default loadingSlice;