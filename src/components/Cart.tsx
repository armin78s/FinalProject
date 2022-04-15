import { useSelector } from "react-redux";
import { categories, productsPerCat } from "../store";

const Carts = () => {
  const category = useSelector(categories);
  return (
    <table className="w-full text-center border border-solid border-gray-500 ">
      <thead>
        <tr className="border border-solid border-gray-500 h-14 bg-gray-400 text-white">
          <th>Number</th>
          <th>Title</th>
          <th>description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {category.map(() => (
          <tr className="odd:bg-gray-200  border border-solid border-gray-500 h-14">
            <td>1</td>
            <td>Product 1</td>
            <td>this is sample text for description</td>
            <td>
              <button className="bg-red-600 rounded-full px-2 text-white">
                -
              </button>{" "}
              1{" "}

              <button className="bg-blue-600  rounded-full px-2 text-white">+</button>
            </td>
            <td>0.00 $</td>
            <td>0.00 $</td>
            <td className="text-left">
              <button className="bg-red-500 text-white px-2 rounded-full py-1 text-lg"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
          </tr>
        ))}
        <tr className="h-14 odd:bg-gray-200 ">
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>0.00$</td>
            <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Carts;
