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
      </div>
    </div>
  );
};

export default Home;
