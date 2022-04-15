import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Cart from "../types/cart";

const CartItem: React.FC<{cartItem:Cart , num :number}>= (props) =>{
  const dispatch = useDispatch();
  const deleteCartItem = () =>{
      dispatch(cartActions.deleteItem(props.cartItem.id));
  }
  const increaseItem = () =>{
    dispatch(cartActions.increaseQuantity(props.cartItem.id));
  }
  const decreaseItem = () =>{
    dispatch(cartActions.decreaseQuantity(props.cartItem.id));
  }
    return(
        <tr className="odd:bg-gray-200  border border-solid border-gray-500 h-14">
            <td>{props.num}</td>
            <td>{props.cartItem.title}</td>
            <td>{props.cartItem.description}</td>
            <td>
              <button  onClick={decreaseItem} className="bg-red-600 rounded-full px-2 text-white">
                -
              </button>{" "}
              {props.cartItem.quantity}{" "}

              <button onClick={increaseItem} className="bg-blue-600  rounded-full px-2 text-white">+</button>
            </td>
            <td>{props.cartItem.price} $ </td>
            <td>{props.cartItem.price * props.cartItem.quantity}$</td>
            <td className="text-left">
              <button onClick={deleteCartItem} className="bg-red-500 text-white px-2 rounded-full py-1 text-lg"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
          </tr>
    )
}

export default CartItem;