import React from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  return (
    <div>
      <ul>
        <Link to="/characters/honorable">
          <li>
            <h1>Honorable</h1>
          </li>
        </Link>
        <Link to="/characters/Villains">
          <li>
            {" "}
            <h1>Villains</h1>
          </li>
        </Link>
        <Link to="/characters/Stink">
          <li>
            {" "}
            <h1>Stink</h1>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Characters;
