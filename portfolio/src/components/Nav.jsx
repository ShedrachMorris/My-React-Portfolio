import { navItem } from "../constants/const";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav className=" top-0 z-50 py-3">
      <div className="container px-4 mx-auto absolute ">
        <div className="flex justify-center items-center">
          {navItem.map((item, index) => (
            <div
              key={index}
              className="hidden lg:flex ml-14 space-x-12 hover:border px-2 py-2 rounded-md cursor-pointer text-gray-400 hover:border-blue-400 hover:text-gray-600 "
            >
              {item.label}
            </div>
          ))}
          <div className="lg:hidden md:flex justify-end absolute top-5 right-10 h-16 w-16 ">
            <button onClick={toggle} className="md: my-2 px-3 py-2 ">
              {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>
      {navOpen && (
        <div className="lg:hidden md:flex justify-end absolute bg-gray-500 top-32 right-12 z-30">
            <div>
            {navItem.map((item, index) => (
            <div
              key={index}
              className="md: my-2 px-3 py-2 text-gray-400 hover:border-blue-400 hover:text-gray-600"
            >
              {item.label}
            </div>
          ))}
            </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
