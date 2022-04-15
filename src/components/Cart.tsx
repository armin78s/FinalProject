import { Fragment } from "react";
import { useSelector } from "react-redux";
import { carts } from "../store";
import CartList from "./CartList";
import NotExist from "./NotExist";

const Carts = () => {
  const cart = useSelector(carts);
  return (
    <Fragment>
      {cart.length === 0 && <NotExist />}
      {cart.length !== 0 && <CartList />}
    </Fragment>
  );
};

export default Carts;
