import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white ">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500"> &lt;</span>

          <span>Pass</span>
          <span className="text-green-500">OP&gt;</span>
        </div>

        <a
          href="https://github.com/iamAmanrajput/Password-Manager"
          target="_blank"
          className="text-white  my-5 mx-2  flex  justify-between items-center"
        >
          <img
            className="invert  w-10 p-1"
            src="/icons/github.svg"
            alt="github logo"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
  