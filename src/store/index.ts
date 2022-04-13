import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category-slice";
import loadingSlice from "./loading-slice";
import productSlice from "./products-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    product: productSlice.reducer,
    loading: loadingSlice.reducer,
    user:userSlice.reducer
  },
});

type RootState = ReturnType<typeof store.getState>;

export const categories = (state: RootState) => state.category.categories;
export const currentCategory = (state: RootState) => state.category.currentCat;
export const productsPerCat = (state: RootState) => state.product.productPerCat;
export const loading = (state: RootState) => state.loading.isLoading;
export const userName = (state: RootState) => state.user.name;

export default store;
