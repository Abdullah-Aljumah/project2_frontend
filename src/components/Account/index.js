import axios from "axios";
import React from "react";
import Nav from "../Nav";
import { useState, useEffect } from "react";
const Account = () => {
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [edit, setEdit] = useState("");

  // Get data by email
  const getData = async () => {
    console.log("get data function");
    const item = await axios.get(
      `http://localhost:5000/user/email/${local.email}`
    );
    setAccount(item.data);
  };

  // Get items from local storage
  const getLocalStorage = () => {
    setLocal(JSON.parse(localStorage.getItem("newUser")));
  };

  // invoke functions getLocalStorage
  useEffect(() => {
    getLocalStorage();
  }, []);

  // invoke functions getData
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  // edit userName
  const editName = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/user/name/${local.email}`, {
      userName: edit,
    });
    getData();
  };

  return (
    <div>
      <Nav />
      {account.map((item, i) => {
        return (
          <div key={i}>
            <form>
              <h1>Username: {item.userName}</h1>
              <input type="submit" value="Edit" onClick={editName} />
              <input type="text" onChange={(e) => setEdit(e.target.value)} />
            </form>
            <h2>Email: {item.email}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Account;