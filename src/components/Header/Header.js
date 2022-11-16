import React from "react";

const Header = () => {
  return (
    <div className="navbar flex justify-between items-center">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl text-white">Meal DB</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-gray-600">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Meals</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
