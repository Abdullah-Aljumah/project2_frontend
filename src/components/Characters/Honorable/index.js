import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Footer from "../../Footer";
import ReactPlayer from "react-player/youtube";
import "./style.css";
import Nav from "../../Nav";
const Honorable = () => {
  let name = useParams().name;
  const [character, setCharacter] = useState([]);
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);
  const URL_BASE = "https://project2-backendd.herokuapp.com";

  const getCharacter = async () => {
    const item = await axios.get(
      `${URL_BASE}/character/name/${name}`
    );
    setCharacter(item.data);
    // console.log(character);
  };
  useEffect(() => {
    getCharacter();
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

  // here

  const getLocalStorage = () => {
    const item = JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  const getDataEmail = async () => {
    const user = JSON.parse(localStorage.getItem("newUser"));
    const item = await axios.get(
      `${URL_BASE}/user/favorite/${user.email}`
    );
    setRemAdd(item.data);
  };

  const removeOrAdd = async (id) => {
    let test = [];

    remAdd.forEach((item) => {
      test.push(item._id);
    });

    if (test.includes(id)) {
      document.getElementById(`${id}`).innerHTML = "Add";

      await axios.put(
        `${URL_BASE}/user/removeFav/${local.email}/${id}`
      );
    } else {
      document.getElementById(`${id}`).innerHTML = "Remove";

      await axios.put(
        `${URL_BASE}/user/favorite/${local.email}/${id}`
      );
    }
    test = [];
    getDataEmail();
    getLocalStorage();
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("newUser"))) {
      getDataEmail();
    }
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

  const test1 = async () => {
    let test = [];

    remAdd.forEach((item) => {
      test.push(item._id);
    });

    if (test.length > 0) {
      // eslint-disable-next-line
      test.map((item) => {
        if (document.getElementById(`${item}`) != null) {
          document.getElementById(`${item}`).innerHTML = "Remove";
        }
      });
    }
    test = [];
  };

  useEffect(() => {
    test1();
    // eslint-disable-next-line
  }, [remAdd]);

  return (
    <div className="baackChar2">
      <Nav />
      {character.map((item, i) => {
        return (
          <div key={i} className="container">
            <div>
              <h1 className="nameCharacterInfo">{item.name}</h1>
              <img src={item.gif} alt="gif dante" className="gif" />
            </div>
            <div className="infoPage3">
              <img src={item.img} alt="character face" className="photoInfo" />
              <div>
                <p className="descCharacter">{item.desc}
                  <a href={item.voice} className="voiceActor">
                  {" "}
                  Voice Actor{" "}
                </a>
                </p>
                <div className="divPrice">
                <h2 className="priceInfo">Price: {item.price}$ </h2>
                </div>
                <div className="divButtonInfo">
                <button
                  id={item._id}
                  onClick={() => removeOrAdd(item._id)}
                  className="btnInfo"
                >
                  <span>Add</span>
                </button>
                </div>
              </div>
            </div>
            <ReactPlayer url={item.video} className="infoVideo" />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Honorable;
