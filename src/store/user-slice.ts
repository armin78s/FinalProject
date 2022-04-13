import { createSlice,PayloadAction  } from "@reduxjs/toolkit";

const initialState: {name :string } = {
    name : "",
  };
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers :{
        init : (state, action: PayloadAction<string >) => {
            state.name = action.payload;
        }
    }

});

export const userActions = userSlice.actions;

export default userSlice;