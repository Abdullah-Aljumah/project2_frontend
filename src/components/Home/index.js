import React from "react";
import Nav from "../Nav";
import "./style.css";
const Home = () => {
  return (
    <div className="backgroundHome">
      {/* <img src="https://media.istockphoto.com/vectors/cute-meadow-area-with-clouds-stars-and-mountains-vector-id1182467056?k=20&m=1182467056&s=612x612&w=0&h=1dUn-3Am0dxxxkEGS04WvQgbCa8PCkps-Y0F2vvAAS0=" alt="background " /> */}
      <div>
        {" "}
        <Nav />
      </div>
      <div className="containerHome">
        <h1 className="test"> HOOOOOOOME </h1>
      </div>
    </div>
  );
};

export default Home;
