"use client";
import { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaTruck, FaUser } from "react-icons/fa";
import { FaQuestion, FaRegEnvelope } from "react-icons/fa6";
import { TbUserSquare } from "react-icons/tb";
import { VscChevronDown } from "react-icons/vsc";
function Header() {
  const [dropdown, setDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <header>
      <div className="bg-[#DDDDDD]">
        <div className="container mx-auto flex justify-end items-center gap-4 py-[10px] text-[#0B0B0B]">
          {/* FAQ Icon */}
          <a
            href="#faq"
            className="flex items-center text-sm hover:text-blue-500 transition"
          >
            FAQ
            <FaQuestion className="ml-[10px]" />
          </a>

          {/* Send Inquiry Icon */}
          <a
            href="#send-inquiry"
            className="flex items-center text-sm hover:text-blue-500 transition"
          >
            Send Inquiry
            <FaRegEnvelope className="ml-2" />
          </a>

          {/* Live Support Icon */}
          <a
            href="#live-support"
            className="flex items-center text-sm hover:text-blue-500 transition"
          >
            Live Support
            <BiMessageRoundedDetail className="ml-2" />
          </a>

          {/* Contact Icon */}
          <a
            href="#contact"
            className="flex items-center text-sm hover:text-blue-500 transition"
          >
            Contact
            <TbUserSquare className="ml-2" />
          </a>
        </div>
      </div>
      <div className="bg-white text-gray-800 py-4">
        <div className="container mx-auto grid grid-cols-12 items-center gap-4 ">
          <div className="col-span-12 md:col-span-2 text-center md:text-left text-[40px] font-bold ">
            Drukland.de
          </div>

          <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row items-center md:gap-6">
            <div className="relative flex gap-4 flex-wrap justify-center md:justify-start mb-3 md:mb-0">
              <div className="relative ml-[30px]">
                <button
                  className="flex items-center hover:text-blue-500"
                  onClick={() => toggleDropdown("business")}
                >
                  Business <VscChevronDown className="ml-1" />
                </button>
                {dropdown === "business" && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg border rounded-md py-2 w-40 z-10">
                    <a
                      href="#option1"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Option 1
                    </a>
                    <a
                      href="#option2"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Option 2
                    </a>
                    <a
                      href="#option3"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Option 3
                    </a>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  className="flex items-center hover:text-blue-500"
                  onClick={() => toggleDropdown("products")}
                >
                  Products <VscChevronDown className="ml-1" />
                </button>
                {dropdown === "products" && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg border rounded-md py-2 w-40 z-10">
                    <a
                      href="#option1"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Product 1
                    </a>
                    <a
                      href="#option2"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Product 2
                    </a>
                    <a
                      href="#option3"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Product 3
                    </a>
                  </div>
                )}
              </div>

              <a href="#about-us" className="hover:text-blue-500">
                About Us
              </a>
            </div>

            {/* Search Box */}
            <div className=" w-[65%] flex items-end border border-[#292929] rounded-md px-2 py-[10px]">
              <CiSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="flex-grow outline-none px-2 text-sm "
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-2 flex justify-end items-center gap-6 mt-3 md:mt-0 ">
            <button className="hover:text-blue-500">
              <FaTruck className="text-2xl" />
            </button>
            <button className="hover:text-blue-500">
              <FaUser className="text-2xl" />
            </button>
            <button className="hover:text-blue-500">
              <FaShoppingCart className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
