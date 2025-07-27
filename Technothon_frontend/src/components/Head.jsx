import React from "react";
import { Link } from "react-router-dom"; // 👈 import Link from react-router-dom

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Head = () => {
  return (
    <div>
      <nav
        aria-label="Global"
        className="flex items-center justify-between z-40 p-6 lg:px-8 fixed w-full"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex">
            <img src="/images/technothon.png" alt="Logo" className="h-15 mx-auto" />
          </Link>
        </div>

        <div className="flex gap-x-12 rounded-full ring-1 ring-gray-200/20 px-7 py-2 backdrop-blur-3xl">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Head;
