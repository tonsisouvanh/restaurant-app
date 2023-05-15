import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/images/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [navScroll, setNavScroll] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 90) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <>
      <div
        className={`fixed z-[50] w-screen ${
          navScroll ? "bg-black/90 text-black" : "bg-transparent"
        }`}
      >
        <div className="rounded-div text-white flex items-center justify-between px-5 h-[80px]">
          <div className="w-[65px]">
            {/* <h1 className="text-2xl text-bold hidden sm:flex">PHAYVANH.</h1> */}
            <img src={logo} className="w-full h-full object-cover" alt="" />
          </div>

          {/* mobile nav */}
          <div
            className={`absolute w-screen flex flex-col items-center gap-8 pt-20 top-0 right-0 bg-black/90 h-screen font-[nunito] transition-all duration-100 ${
              nav ? "translate-0" : "translate-x-full"
            } sm:hidden`}
          >
            {/* <div className="">
              <h1 className="text-2xl text-bold">PHAYVANH.</h1>
            </div> */}
            <div className="w-[65px]">
              <img src={logo} className="w-full h-full object-cover" alt="" />
            </div>
            <ul className="select-none text-lg flex flex-col gap-8 mt-5">
              <li className="transition hover:text-yellow-400 hover:font-bold cursor-pointer min-w-[80px] text-center">
                Home
              </li>
              <li className="transition hover:text-yellow-400 hover:font-bold cursor-pointer min-w-[80px] text-center">
                Our Menu
              </li>
              <li className="transition hover:text-yellow-400 hover:font-bold cursor-pointer min-w-[80px] text-center">
                About
              </li>
              <li className="transition hover:text-yellow-400 hover:font-bold cursor-pointer min-w-[80px] text-center">
                Contact
              </li>
              <div className="cursor-pointer absolute top-9 right-5 flex flex-col items-center">
                <AiOutlineClose size={25} onClick={() => setNav(!nav)} />
              </div>
            </ul>
          </div>

          {/* desktop nav */}
          <ul className={`hidden text-white font-[nunito] sm:flex gap-8`}>
            <li className="transition hover:text-gray-300 hover:font-bold cursor-pointer min-w-[80px] text-center">
              Home
            </li>
            <li className="transition hover:text-gray-300 hover:font-bold cursor-pointer min-w-[80px] text-center">
              Our Menu
            </li>
            <li className="transition hover:text-gray-300 hover:font-bold cursor-pointer min-w-[80px] text-center">
              About
            </li>
            <li className="transition hover:text-gray-300 hover:font-bold cursor-pointer min-w-[80px] text-center">
              Contact
            </li>
          </ul>
          {!nav ? (
            <AiOutlineMenu
              size={25}
              className="sm:hidden cursor-pointer"
              onClick={() => setNav(!nav)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
