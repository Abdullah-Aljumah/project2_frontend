import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const Account = () => {
  const [account, setAccount] = useState([]);
  const [email, setEmail] = useState([]);
  let local = localStorage.getItem("newUser");

  const getData = async () => {
      console.log("local",local);
    setEmail(local);
    console.log("email", email);
    const item = await axios.get(
      `http://localhost:5000/user/email/${email.email}`
    );
    console.log("item", item);
    setAccount(item.data);
    console.log("account =", account);
  };

  useEffect(() => {
    getData();
  }, []);
  return <div></div>;
};

export default Account;
