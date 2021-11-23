import React from "react";
import Nav from "../Nav";
import "./style.css";
const Home = () => {
  return (
    <div className="backgroundHome">
      <div className="containerHome">
        {" "}
        <Nav />
      </div>
      <div className="containerHome">
        <h1 className="welcoming"> HOOOOOOOME </h1>
        <p className="welcoming">khfaoihfiue</p>
      </div>
      <ul className="ulCategory">
        <li className="categoryLiHome">
          <div className="categoryHome">
            <img
              className="categotyHome"
              src="https://c.wallhere.com/photos/66/a2/artwork_dark_Venom-1476791.jpg!d"
              alt="villains"
            />
            <div className="textCategory">
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
            <div className="textCategory">
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
            <div className="textCategory">
              {" "}
              <h2 className="h2Category"> Villains </h2>
            </div>
          </div>
        </li>
      </ul>
      <div>
        <h1>HOOOOOOOOOOOOLA</h1>
      </div>
    </div>
  );
};

export default Home;
