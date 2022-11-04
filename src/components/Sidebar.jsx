import { MdComputer, MdOutlineFastfood } from "react-icons/md";
import { AiOutlineRightCircle } from "react-icons/ai";
import { SiVectorlogozone } from "react-icons/si";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // const [dropDownToggle, setDropdownToggle] = useState<boolean>(false);
  // const [dropDown, setDropdown] = useState<string>("");

  // const handleClick = (event: any) => {
  //   setDropdown(event.currentTarget.id);
  //   setDropdownToggle(!dropDownToggle);
  // };

  return (
    <div
      className={`h-screen sticky top-0 transition-all bg-gray-900 text-white ${open ? "py-5 px-8" : "p-4"
        } lg:p-6 lg:w-[300px]`}
    >
      <AiOutlineRightCircle
        onClick={() => setOpen(!open)}
        className={`absolute cursor-pointer text-white bg-gray-900 h-[50px] rounded-md text-xl transition-all 
        ${!open
            ? "top-[23px] right-[-10px]"
            : "rotate-180 top-[15px] right-[-10px]"
          } lg:hidden`}
      />
      {/* Desktop sidebar */}
      <div className={`hidden lg:flex lg:flex-col lg:gap-5`}>
        <div className="relative">
          <h2 className="text-lg font-bold lg:text-2xl">PHAYVANH.</h2>
        </div>
        <div className="">
          <h2 className="text-gray-400 w-full mb-2">Main</h2>
          <ul>
            <Link to="/admin/">
              <li className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2 lg:text-lg">
                <MdComputer />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>

        <div className="">
          <h2 className="text-gray-400 w-full mb-2">List</h2>
          <ul className="space-y-5 lg:text-lg">
            <Link to="/admin/foodlist">
              <li className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2">
                <MdOutlineFastfood />
                Foods
              </li>
            </Link>
            <li className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2">
              <BsPerson />
              Employees
            </li>
            <li className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2">
              <MdComputer />
              Orders
            </li>
            {/* <li>
                <div
                  id="dropdown1"
                  onClick={handleClick}
                  className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2"
                >
                  <MdComputer />
                  Dropdown
                </div>
                {dropDown === "dropdown1" && dropDownToggle ? (
                  <ul className="ml-6">
                    <li>Menu A</li>
                    <li>Menu A</li>
                    <li>Menu A</li>
                    <li>Menu A</li>
                  </ul>
                ) : null}

                <div
                  id="dropdown2"
                  onClick={handleClick}
                  className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2"
                >
                  <MdComputer />
                  Dropdown
                </div>
                {dropDown === "dropdown2" && dropDownToggle ? (
                  <ul className="ml-6">
                    <li>Menu A</li>
                    <li>Menu A</li>
                    <li>Menu A</li>
                    <li>Menu A</li>
                  </ul>
                ) : null}
              </li> */}
          </ul>
        </div>
      </div>

      {/* Mobile nav */}
      {open ? (
        // Open sidebar
        <div className={`flex flex-col gap-5 lg:hidden`}>
          <div className="relative">
            <h2 className="text-lg font-bold">PHAYVANH.</h2>
          </div>
          <div className="">
            <h2 className="text-gray-400 w-full mb-2">Main</h2>
            <ul>
              <Link to="/admin/">
                <li className="flex text-md items-center gap-2">
                  <MdComputer />
                  Dashboard
                </li>
              </Link>
            </ul>
          </div>

          <div className="">
            <h2 className="text-gray-400 w-full mb-2">List</h2>
            <ul className="space-y-5">
              <Link to="/admin/foodlist">
                <li className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2">
                  <MdOutlineFastfood />
                  Foods
                </li>
              </Link>

              <li className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2">
                <BsPerson />
                Employees
              </li>
              <li className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2">
                <MdComputer />
                Orders
              </li>
              {/* <li>
                <div
                  id="dropdown1"
                  onClick={handleClick}
                  className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2"
                >
                  <MdComputer />
                  Dropdown
                </div>
                {dropDown === "dropdown1" && dropDownToggle ? (
                  <ul className="ml-6">
                    <li>Menu A</li>
                    <li>Menu A</li>
                    <li>Menu A</li>
                    <li>Menu A</li>
                  </ul>
                ) : null}

                <div
                  id="dropdown2"
                  onClick={handleClick}
                  className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2"
                >
                  <MdComputer />
                  Dropdown
                </div>
                {dropDown === "dropdown2" && dropDownToggle ? (
                  <ul className="ml-6">
                    <li>Menu A</li>
                    <li>Menu A</li>
                    <li>Menu A</li>
                    <li>Menu A</li>
                  </ul>
                ) : null}
              </li> */}
            </ul>
          </div>
        </div>
      ) : (
        // Closed sidebar
        <div
          className={`flex flex-col gap-5 ${open ? "" : "justify-center items-center"
            } lg:hidden`}
        >
          <div className="mb-5">
            <SiVectorlogozone />
          </div>
          <div className="">
            <ul>
              <li className="flex text-md items-center gap-2">
                <MdComputer />
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="space-y-5">
              <li className="flex text-xl items-center gap-2">
                <MdOutlineFastfood />
              </li>
              <li className="flex text-xl items-center gap-2">
                <BsPerson />
              </li>
              <li className="flex text-xl items-center gap-2">
                <MdComputer />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
