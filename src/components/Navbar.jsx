import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  const {cart} = useSelector((state)=> {
    return state; 
  })

  return (
    <div>
      <nav
        className="flex justify-between h-20  items-center  text-slate-50 max-w-6xl mx-auto 
         "
      >
        <NavLink to="/">
          <div>
            <img src="./logo.png" alt="logo" className="h-20 py-1" />
          </div>
        </NavLink>
        <div className="flex items-center gap-x-6 font-medium flex-wrap pr-6">
          <NavLink to="/">
            <p className=" text-lg md:text-xl">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="text-2xl relative">
              <FaShoppingCart />
              {cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 
              flex justify-center items-center animate-bounce rounded-full text-white" >{cart.length}</span>}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
