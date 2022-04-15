import { useDispatch } from "react-redux";
import { toast} from "react-toastify";
import { cartActions } from "../store/cart-slice";
import Product from "../types/product";

const ProductItem: React.FC<{
  product: Product;
}> = (props) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    const item = {
      id: props.product.id,
      title: props.product.title,
      price: props.product.price,
      category: props.product.category,
      description: props.product.description,
      image: props.product.image,
    };
    dispatch(cartActions.addToCart(item));
    toast.success(`${props.product.title} add to cart`);
  };
  return (
    <div className="flex flex-col mt-5 w-96 lg:w-1/3 p-2">
      <div className="flex-1 overflow-hidden h-max border border-solid border-gray-300 shadow-lg rounded-xl bg-gray-50">
        <img className="h-80 w-full" src={props.product.image} />
        <div className=" p-6">
          <h2 className="mt-2 text-2xl font-semibold">{props.product.title}</h2>
          <div>
            <h4 className="text-lg mt-4">{props.product.description}</h4>
          </div>
          <div className="mt-4">
            <h4 className="text-lg">
              {props.product.price}{" "}
              <i className="fa fa-usd" aria-hidden="true"></i>
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

export default ProductItem;
