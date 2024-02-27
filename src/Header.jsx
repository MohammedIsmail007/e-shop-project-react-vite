import React from "react";
import "./App.css";

function Header() {
  return (
    <>
      <header className=" w-full p-2 flex flex-wrap justify-between bg-opacity-10 bg-blue-100 rounded-sm mb-3">
        <h2>E-Commerce Website</h2>

        <ul className="flex flex-wrap">
          <li onClick={<Header />} className="hover:scale-110">
            Home
          </li>
          <li className="hover:scale-110">Products</li>
          <li className="hover:scale-110">About</li>
          <li className="hover:scale-110">Contact us</li>
        </ul>
      </header>
    </>
  );
}

export default Header;
