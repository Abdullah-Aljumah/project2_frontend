import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const Nav = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/Character">
          <li>Characters</li>
        </Link>
        <Link to="/account">
          <li>Account</li>
        </Link>
        <li onClick={logOut}>log Out</li>
      </ul>
    </div>
  );
};

export default Nav;
