import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./style.css";
import { BsCart4 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
const Nav = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const navHome = () => {
    navigate("/home");
  };

  return (
    <div className="containerNav">
      <ul className="ulNav">
        <li>
          {" "}
          <h1 onClick={navHome} className="logo">
            {" "}
            GOLDEN CARDS{" "}
          </h1>
        </li>
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

        <Link to="/account" className="linkNav">
          <li>
            <h2 className="h2Nav">Account</h2>
          </li>
        </Link>
        <Link to="/fav" className="linkNav">
          <li>
            <h2 className="h2Nav">
              <BsCart4 />
            </h2>
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
