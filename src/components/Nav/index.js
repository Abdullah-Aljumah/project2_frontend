import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
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
      </ul>
    </div>
  );
};

export default Nav;
