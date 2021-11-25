import React from "react";
import Nav from "../Nav";
import "./style.css";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate()
const toCharacter = () => {
  navigate("/Character")
}
  return (
    <div className="backgroundHome">
      <div className="containerHome">
        <Nav />
        <div className="homeContent" >
        <h1 className="welcoming"> Welocme to " ***** " </h1>
        <p className="welcoming" id="pWelcoming"> Looking for some cards?, You are in the right place </p>
        <h1 className="welcoming" id="getStart" onClick={toCharacter}>Get Started!</h1>
        </div>
      </div>
      <div className="containerHome">
       
      </div>
    </div>
  );
};

export default Home;
