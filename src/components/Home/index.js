import React from "react";
import Nav from "../Nav";
import "./style.css";
import { useNavigate } from "react-router";
import { MdAccountCircle } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Home = () => {
  const [account, setAccount] = useState("");
  const [local, setLocal] = useState([]);

  const getData = async () => {

    const item = await axios.get(
      `http://localhost:5000/user/email/${local.email}`
    );

    if (item.data.length > 0) {
      setAccount(item.data[0].userName);
    }
  };

  useEffect(() => {
      getData();
 
  }, [local]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  const getLocalStorage = () => {
    setLocal(JSON.parse(localStorage.getItem("newUser")));
  };

  const navigate = useNavigate();
  const toCharacter = () => {
    navigate("/Character");
  };

  const navToAccount = () => {
    navigate("/account");
  };

  return (
    <div className="backgroundHome">
      <div className="containerHome">
        <Nav />
        <div className="temp">
          <ul className="ulTemp">
            <li>
              <div className="homeContent">
                <div className="welcomeName">
                  <h1 className="welcoming" id="welcomingH1">
                    {" "}
                    Welocme
                  </h1>
                  <h1  id="welcomingH1" className="accountH1"> {account} </h1>
                </div>
                <p className="welcoming" id="pWelcoming">
                  {" "}
                  Looking for some cards?, You are in the right place{" "}
                </p>
                <h1 className="welcoming" id="getStart" onClick={toCharacter}>
                  Get Started!
                </h1>
              </div>
            </li>
            <li>
              <div className="card2Home" onClick={navToAccount}>
                <h1 className="iconAccount">
                  {" "}
                  <MdAccountCircle />
                </h1>
                <h2 className="h2Home"> Your Account </h2>
              </div>
            </li>
            <li>
              <div className="card3Home">
                <h1 className="iconAccount">
                  {" "}
                  <BsCart4 />{" "}
                </h1>
                <h2> Cart </h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
