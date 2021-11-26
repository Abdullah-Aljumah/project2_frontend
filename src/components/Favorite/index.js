import React from "react";
import Nav from "../Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";
import { BsCart4 } from "react-icons/bs";

const Favorite = () => {
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [total, setTotal] = useState("");

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

  const totalPrice = () => {
    let totalFirst = 0;
    setTotal(0);
    if (account.length > 0) {
      account.map((item) => {
        console.log("item.price", item.price);
      return  totalFirst += item.price * 1;
      });
      console.log("totalFirst", totalFirst);
    }
    setTotal(totalFirst);
  };

  useEffect(() => {
    totalPrice();
     // eslint-disable-next-line
  }, [account]);

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

  // Remove from favorite
  const removeFavorite = (id) => {
    axios.put(`http://localhost:5000/user/removeFav/${local.email}/${id}`);
    getLocalStorage();
  };

  return (
    <div>
      <div className="baackChar5" id="containerCart1">
        <Nav />
        <h1 className="incoCartCart">
          <BsCart4 />
        </h1>
        <dv className="total">
          {" "}
          <h2> Total : {total}$ </h2>
        </dv>
        {account.length &&
          account.map((item, i) => {
            return (
              <div key={i} className="divCart">
                <ul className="ulCart">
                  <li className="liCart">
                    {" "}
                    <img
                      className="imageCharacterCart"
                      src={item.img}
                      alt="character"
                    />
                    <h1 className="characterNameCart">{item.name}</h1>
                    <h1 className="characterNameCart">{item.game}</h1>
                    <h1 className="characterNameCart">{item.price}$</h1>
                    <div className="btnCartDiv">
                      <button
                        onClick={() => removeFavorite(item._id)}
                        className="btn1"
                        id="btnCart"
                      >
                        {" "}
                        Remove{" "}
                      </button>
                    </div>
                  </li>
                  <div className="divBtnCart"></div>
                </ul>
              </div>
            );
          })}
      </div>
      <p className="footer" id="footerCart">
        © 2021 Copyright: GoldenCards.com
      </p>
    </div>
  );
};

export default Favorite;

// onClick={() => itemInfo(item.name)}
//  onClick={() => itemInfo(item.name)}
