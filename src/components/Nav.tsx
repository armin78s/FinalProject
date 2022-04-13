import React from "react";

const Nav = () => {
  return (
    <nav className="h-16 flex items-center justify-between bg-gray-200">
      <div className="ml-4 text-xl">
        <i className="text-2xl fa fa-user-circle-o" aria-hidden="true"></i>
        <h3 className="inline-block ml-2">Hi,Armin</h3>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Armin's Store</h1>
      </div>
      <div className="mr-4">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <a className="ml-2 inline-block text-xl">
          Cart <span className="bg-red-600 rounded-2xl px-3">0</span>{" "}
        </a>
      </div>
    </nav>
  );
};

export default Nav;
