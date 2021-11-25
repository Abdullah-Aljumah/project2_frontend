import React from "react";
import { useNavigate } from "react-router";
import Nav from "../Nav";
const Characters = () => {
  const navigate = useNavigate();
  const navToHonorbale = () => {
    navigate("/character/honorable");
  };

  const navToVillains = () => {
    navigate("/character/Villains");
  };

  const navToStinks = () => {
    navigate("/character/Stink");
  };
  return (
    <div>
      <Nav />

      <ul className="ulCategory">
        <li className="categoryLiHome">
          <div className="categoryHome">
            <img
              className="categotyHome"
              src="https://c.wallhere.com/photos/66/a2/artwork_dark_Venom-1476791.jpg!d"
              alt="villains"
            />
            <div className="textCategory" onClick={navToHonorbale}>
              {" "}
              <h2 className="h2Category"> Honorables </h2>
            </div>
          </div>
          <div></div>
        </li>
        <li className="categoryLiHome">
          <div className="categoryHome">
            <img
              className="categotyHome"
              src="https://c.wallhere.com/photos/66/a2/artwork_dark_Venom-1476791.jpg!d"
              alt="villains"
            />
            <div className="textCategory" onClick={navToVillains}>
              {" "}
              <h2 className="h2Category"> Villains </h2>
            </div>
          </div>
          <div></div>
        </li>
        <li className="categoryLiHome">
          <div className="categoryHome">
            <img
              className="categotyHome"
              src="https://c.wallhere.com/photos/66/a2/artwork_dark_Venom-1476791.jpg!d"
              alt="villains"
            />
            <div className="textCategory" onClick={navToStinks}>
              {" "}
              <h2 className="h2Category"> Stinks </h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Characters;
