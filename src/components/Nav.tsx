import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userName } from "../store";

const Nav = () => {
  const name = useSelector(userName);
  return (
    <nav className="h-16 flex items-center justify-between bg-gray-200">
      <div className="ml-4 text-base sm:text-xl">
        <i className="sm:text-2xl fa fa-user-circle-o" aria-hidden="true"></i>
        <h3 className="inline-block ml-2">Hi,{name}</h3>
      </div>
      <div>
        <NavLink to="/" className="text-base sm:text-2xl sm:font-semibold">Armin's Store</NavLink>
      </div>
      <div className="mr-4">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <NavLink className="ml-2 inline-block text-base sm:text-xl" to="/cart">
          Cart <span className="bg-red-600 rounded-2xl px-1 sm:px-3">0</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
