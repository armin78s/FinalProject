import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category-slice";
import loadingSlice from "./loading-slice";
import productSlice from "./products-slice";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    product: productSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const categories = (state: RootState) => state.category.categories;
export const currentCategory = (state: RootState) => state.category.currentCat;
export const products = (state: RootState) => state.product.products;
export const productsPerCat = (state: RootState) => state.product.productPerCat;
export const loading = (state: RootState) => state.loading.isLoading;

export default store;
