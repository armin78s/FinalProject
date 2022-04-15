import Cart from "../types/cart";

const CartItem: React.FC<{cartItem:Cart}>= (props) =>{
    return(
        <tr className="odd:bg-gray-200  border border-solid border-gray-500 h-14">
            <td>1</td>
            <td>{props.cartItem.title}</td>
            <td>{props.cartItem.description}</td>
            <td>
              <button className="bg-red-600 rounded-full px-2 text-white">
                -
              </button>{" "}
              1{" "}

              <button className="bg-blue-600  rounded-full px-2 text-white">+</button>
            </td>
            <td>{props.cartItem.price} $ </td>
            <td>{props.cartItem.price * props.cartItem.quantity}$</td>
            <td className="text-left">
              <button className="bg-red-500 text-white px-2 rounded-full py-1 text-lg"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
          </tr>
    )
}

export default CartItem;