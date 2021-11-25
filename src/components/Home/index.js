import React from "react";
import Nav from "../Nav";
import "./style.css";
import { useNavigate } from "react-router";
import {MdAccountCircle} from "react-icons/md"
const Home = () => {
  const navigate = useNavigate()
const toCharacter = () => {
  navigate("/Character")
}
  return (
    <div className="backgroundHome">
      <div className="containerHome">
        <Nav />
        <div className="temp">
          <ul className="ulTemp">
            <li>
        <div className="homeContent" >
        <h1 className="welcoming" id="welcomingH1"> Welocme to "****" </h1>
        <p className="welcoming" id="pWelcoming"> Looking for some cards?, You are in the right place </p>
        <h1 className="welcoming" id="getStart" onClick={toCharacter}>Get Started!</h1>
        </div>
        </li>
        <li>
        <div className="card2Home">
          <h1> <MdAccountCircle /></h1>
          <h2> Your Account </h2>
        </div>
        </li>
        <li>
        <div className="card3Home">
          <h1> Cart </h1>
        </div>
        </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Home;
