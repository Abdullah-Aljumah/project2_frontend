import React from "react";
import Nav from "../Nav";
import axios from "axios";
import { useState, useEffect } from "react";
const Favorite = () => {
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [character, setCharacter] = useState([]);

  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    console.log("get localStorage");
    setLocal(item);
  };

  const getData = async () => {
    const item = await axios.get(
      `http://localhost:5000/user/email/${local.email}`
    );
    console.log("get Data");
    setAccount(item.data);
    // console.log("account =", account);
    // console.log("account.favorite =", account[0].favorite[0]);
  };

  // character
  const getCharacter = async () => {
    const item = await axios.get("http://localhost:5000/character");
    console.log("get character");
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
    console.log("account", account);
    console.log("character", character);
    // console.log("character.name", character[0].name);
  }, [account]);

  return (
    <div>
      <Nav />
      <p>Favorite</p>
      {/* {account.map((item, i) => {
        return item.name.includes(account);
      })} */}

      {account.length && account[0].favorite.map((item, i) => {
        if (item.includes(character[i].name)) {
          return (
            <div>
              {" "}
              <h1>{character[i].name}</h1>{" "}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Favorite;
