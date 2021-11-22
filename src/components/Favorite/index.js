import React from "react";
import Nav from "../Nav";
import axios from "axios";
import { useState, useEffect } from "react";
const Favorite = () => {
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [character, setCharacter] = useState([]);

  // character
  const getCharacter = async () => {
    const item = await axios.get("http://localhost:5000/character");
    // console.log("item character =", item.data);
    setCharacter(item.data);
    console.log("character = ", character);
  };

  // Get data by email
  const getData = async () => {
    const item = await axios.get(
      `http://localhost:5000/user/email/${local.email}`
    );
    // console.log("item.data = ",item.data);
    setAccount(item.data);
    console.log("account =", account);
  };

  // Get items from local storage
  const getLocalStorage = () => {
    setLocal(JSON.parse(localStorage.getItem("newUser")));
    // console.log("local =", local);
  };

  // invoke functions getLocalStorage
  useEffect(() => {
    getLocalStorage();
    getCharacter();
    // eslint-disable-next-line
  }, []);

  // invoke functions getData
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  return (
    <div>
      <Nav />
      <p>Favorite</p>
      {account.map((item, i) => {
        return item.favorite.includes(character.name);
      })}
    </div>
  );
};

export default Favorite;
