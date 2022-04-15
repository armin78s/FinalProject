import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Product: React.FC<{
  id: number;
  category: string;
  title: string;
  image: string;
  price: number;
  desc: string;
}> = (props) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      category: props.category,
      description: props.desc,
      image: props.image,
    };
    dispatch(cartActions.addToCart(item));
    
  };
  return (
    <div className="flex flex-col mt-5 w-96 lg:w-1/3 p-2">
      <div className="flex-1 overflow-hidden h-max border border-solid border-gray-300 shadow-lg rounded-xl bg-gray-50">
        <img className="h-80 w-full" src={props.image} />
        <div className=" p-6">
          <h2 className="mt-2 text-2xl font-semibold">{props.title}</h2>
          <div>
            <h4 className="text-lg mt-4">{props.desc}</h4>
          </div>
          <div className="mt-4">
            <h4 className="text-lg">
              {props.price} <i className="fa fa-usd" aria-hidden="true"></i>
            </h4>
          </div>
          <div className="text-center mt-6 static bottom-0">
            <button
              onClick={addItemToCart}
              className="hover:bg-indigo-800 bg-indigo-600 rounded-md text-white border border-solid border-gray-500 px-14 py-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
