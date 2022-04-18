import { useSelector } from "react-redux";
import { carts, totalPrice } from "../store";
import CartItem from "./CartItem";

const CartList = () =>{
    const cart = useSelector(carts);
  const total = useSelector(totalPrice);
  let index = 1;
    return(
        <table className="mt-12 w-full text-center border border-solid border-gray-500 ">
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
          {cart.map((c) => (
            <CartItem key={c.id} cartItem={c} num={index++} />
          ))}
          <tr className="h-14 odd:bg-gray-200 ">
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total.toFixed(2)} $</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
};

export default CartList;