import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
const Characters = () => {
  return (
    <div>
                <Nav />

      <ul>
        <Link to="/character/honorable">
          <li>
            <h1>Honorables</h1>
          </li> 
        </Link> 
        <Link to="/character/Villains">
          <li>
            {" "}
            <h1>Villains</h1>
          </li>
        </Link>
        <Link to="/character/Stink">
          <li>
            {" "}
            <h1>Stinks</h1>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Characters;
