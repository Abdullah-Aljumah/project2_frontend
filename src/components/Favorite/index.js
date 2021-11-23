import React from "react";
import Nav from "../Nav";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const Favorite = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [character, setCharacter] = useState([]);

  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    // console.log("get localStorage");
    setLocal(item);
  };

  const getData = async () => {
    const item = await axios.get(
      `http://localhost:5000/user/email/${local.email}`
    );
    // console.log("get Data");
    setAccount(item.data);
    // console.log("account =", account);
    // console.log("account.favorite =", account[0].favorite[0]);
  };

  // character
  const getCharacter = async () => {
    const item = await axios.get("http://localhost:5000/character");
    // console.log("get character");
    setCharacter(item.data);
  };

  // Get data by email

  // Get items from local storage

  // invoke functions getLocalStorage
  useEffect(() => {
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

  // invoke functions getData
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  useEffect(() => {
    getCharacter();
    console.log("local", local);
    console.log(" account : ", account); 
    console.log("character : ", character);
    // console.log(
    //   "TEEEEEEEEEEST :",
    //   account[0].favorite.map((item, i) => item[i].includes(character[i].name))
    // );
    // console.log(" account[0].favorite", account[0].favorite);
  }, [account]);

  // const characterInfo = (name) => {
  //   navigate(`/character/name/${name}`);
  // };
  return (
    <div>
      <Nav />
      <p>Favorite</p>

      {/* {account.length &&
        account[0].favorite.map((item, i) => {
          if (item.includes(character[i].name)) {
            return (
              <div>
                <h1>{character[i].name}</h1>{" "}
              </div>
            );
          } else {
            <div>failed</div>;
          }
        })} */}
    </div>
  );
};

export default Favorite;
