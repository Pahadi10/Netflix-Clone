import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="navBar">
      <div className=" navBar-div">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
          className="nav-logo"
        ></img>
       
        <div className="flex gap-6 pt-7 h-16">
      <select className="rounded-[4px] px-6 lang-drop">
        <option value="English " className="text-black">English</option>
        <option value="Hindi" className="text-black">हिन्दी</option>
      </select>
      <Link to= '/login'>
      <button className="bg-red-600 rounded-[4px] px-4 sign-in-button" style={{ whiteSpace: 'nowrap' }}>Sign In</button>
      </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
