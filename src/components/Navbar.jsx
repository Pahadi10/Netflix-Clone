import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="navBar">
      <div className=" navBar-div">
        <img
          src="../src/assets/loginPage/NetflixLogo.png"
          className="nav-logo"
        ></img>
       
        <div className="flex gap-6 pt-7 h-16">
      <select className="rounded-[4px] px-6 lang-drop">
        <option value="English " className="text-black">English</option>
        <option value="Hindi" className="text-black">हिन्दी</option>
      </select>
      <Link to= '/login'>
      <button className="bg-red-600 rounded-[4px] px-4 sign-in-button">Sign In</button>
      </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
