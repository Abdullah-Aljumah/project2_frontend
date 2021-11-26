import React from "react";
import { useNavigate } from "react-router";
import Nav from "../Nav";
import "./style.css";
// import Footer from "../Footer";
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
    <div className="baackChar">
      <Nav />

      <ul className="ulCategory">
        <li className="categoryLiHome">
          <div className="categoryHome">
            <img
              className="categotyHome"
              src="https://i.pinimg.com/474x/e7/20/00/e7200042d8aa82910555779566e00ae2.jpg"
              alt="villains"
            />
            <div className="textCategory" onClick={navToHonorbale}>
              {" "}
              <h2 className="h2Category"> Honorables </h2>
            </div>
          </div>
          <div>
            <p className="cardInfoChar">
             " IF I CANNOT OUTSMART THEM, I WILL OUTFIGHT THEM. "
            </p>
          </div>
        </li>
        <li className="categoryLiHome">
          <div className="categoryHome">
            <img
              className="categotyHome"
              src="https://www.artranked.com/images/56/566bcd45025e6c030324843711059dd1.jpg"
              alt="villains"
            />
            <div className="textCategory" onClick={navToVillains}>
              {" "}
              <h2 className="h2Category"> Villains </h2>
            </div>
          </div>
          <p className="cardInfoChar">
            " I PREFER A REAL VILLAIN TO A FALSE HERO. "
          </p>
        </li>
        <li className="categoryLiHome">
          <div className="categoryHome">
            <img
              className="categotyHome"
              src="https://pbs.twimg.com/media/E30Jqk9WYAMFPnX.jpg:small"
              alt="villains"
            />
            <div className="textCategory" onClick={navToStinks}>
              {" "}
              <h2 className="h2Category"> Stinks </h2>
            </div>
          </div>
          <p className="cardInfoChar"> " LIFE IS EASY. JUST STAY UN-DEAD. "</p>
        </li>
      </ul>
      {/* <Footer /> */}
    </div>
  );
};

export default Characters;
