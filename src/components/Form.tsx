import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories, currentCategory } from "../store";
import { categoryActions } from "../store/category-slice";
import { productActions } from "../store/products-slice";

const Form = () => {
  const category = useSelector(categories);
  const currentCat = useSelector(currentCategory);
  const dispatch = useDispatch();

  const change = (event: ChangeEvent<{ value: string }>) => {
    if (event.target.value === "all") {
      dispatch(productActions.allProduct());
      dispatch(categoryActions.categoryChange(event.target.value));
    } else {
      dispatch(productActions.catchange(event.target.value));
      dispatch(categoryActions.categoryChange(event.target.value));
    }
  };

  const charChange = (event: ChangeEvent<{ value: string }>) => {
    if (event.target.value.trim() === "") {
      if (currentCat === "all") {
        dispatch(productActions.allProduct());
      } else {
        dispatch(productActions.catchange(currentCat));
      }
    }
    dispatch(productActions.charChange(event.target.value));
  };

  return (
    <form className="flex flex-wrap p-4 justify-center lg:justify-start mt-8">
      <div className="flex flex-col justify-center mr-10 relative text-gray-600 focus-within:text-gray-400 w-96">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <span className="p-1 focus:outline-none focus:shadow-outline">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </span>
        <input
          onChange={charChange}
          type="search"
          className="py-1 md:px-36 border border-solid border-gray-600 rounded-xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
        />
      </div>

      <select
        onChange={change}
        className="flex flrx-col  border-b-2 border-gray-400 w-96 focus:outline-none mt-8 md:mt-0"
      >
        <option value="all">All Products</option>
        {category.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Form;
