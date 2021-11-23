import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./style.css";
// import { AiOutlineHome } from "react-icons/ai";
// import { VscAccount } from "react-icons/vsc";
// import { BiCategoryAlt } from "react-icons/bi";
// import { MdFavoriteBorder } from "react-icons/md";

import { FiLogOut } from "react-icons/fi";
const Nav = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="containerNav">
      <ul className="ulNav">
        <Link to="/home" className="linkNav">
          <li>
            <h2 className="h2Nav">Home</h2>
          </li>
        </Link>
        <Link to="/Character" className="linkNav">
          <li>
            <h2 className="h2Nav">Characters</h2>
          </li>
        </Link>
       
        <Link to="/fav" className="linkNav">
          <li>
            <h2 className="h2Nav">Favorite</h2>
          </li>
        </Link>
        <Link to="/account" className="linkNav">
          <li>
            <h2 className="h2Nav">Account</h2>
          </li>
        </Link>
        <li onClick={logOut} className="linkNav">
          <h2 className="h2Nav">
            {" "}
            <FiLogOut />{" "}
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
