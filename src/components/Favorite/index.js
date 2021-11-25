import React from "react";
import Nav from "../Nav";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Footer from "../Footer";

const Favorite = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);

  // Get email from localStorage
  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  // Get info the character base on email from backend
  const getData = async () => {
    const item = await axios.get(
      `http://localhost:5000/user/favorite/${local.email}`
    );
    setAccount(item.data);
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

  // Navigate to character info
  const itemInfo = (name) => {
    console.log(name);
    navigate(`/character/name/${name}`);
  };

  // Remove from favorite
  const removeFavorite = (id) => {
    axios.put(`http://localhost:5000/user/removeFav/${local.email}/${id}`);
    getLocalStorage();
  };
  return (
    <div>
      <Nav />
      <p>Favorite</p>
      {account.length &&
        account.map((item, i) => {
          return (
            <div>
              <div onClick={() => itemInfo(item.name)}>
                {" "}
                <h1>{item.name}</h1>
                <img src={item.img} alt="character" />
              </div>
              <button onClick={() => removeFavorite(item._id)}> Remove</button>
            </div>
          );
        })}
              <Footer />
    </div>
  );
};

export default Favorite;
