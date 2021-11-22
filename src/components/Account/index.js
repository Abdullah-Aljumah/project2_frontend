import axios from "axios";
import React from "react";
import Nav from "../Nav";
import { useState, useEffect } from "react";
const Account = () => {
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);

  // invoke functions

  // Get data by email
  const getData = async () => {
    const item = await axios.get(
      `http://localhost:5000/user/email/${local.email}`
    );
    console.log("item", item.data);
    setAccount(item.data);
  };
  // Get items from local storage
  const getLocalStorage = () => {
    setLocal(JSON.parse(localStorage.getItem("newUser")));
  };
  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    getData();
  }, [local]);

  return (
    <div>
          <Nav />
      {account.map((item, i) => {
        return (
          <div key={i}>
            <h1>{item.userName}</h1>
            <h2>{item.email}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Account;

// console.log("account =", account);
