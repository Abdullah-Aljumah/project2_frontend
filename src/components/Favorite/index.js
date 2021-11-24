import React from "react";
import Nav from "../Nav";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const Favorite = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  // const [character, setCharacter] = useState([]);

  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  const getData = async () => {
    const item = await axios.get(
      `http://localhost:5000/user/favorite/${local.email}`
    );
    setAccount(item.data);
    console.log(account);
  };

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

  return (
    <div>
      <Nav />
      <p>Favorite</p>
      {account.length &&
        account.map((item, i) => {
          return (
            <div>
              {" "}
              <h1>{item.name}</h1>
              <img src={item.img} alt="character" />
            </div>
          );
        })}
      {/* {account.length &&
      account.map((item,i)=>{
        <div key={i}>
          <h1>{item[0].name}</h1>
          <img src={item[0].img} alt="character"/>
        </div>
      }) } */}
    </div>
  );
};

export default Favorite;
