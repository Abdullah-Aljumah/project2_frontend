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

    if (edit.length > 0) {
      await axios.put(`http://localhost:5000/user/name/${local.email}`, {
        userName: edit,
      });
      document.getElementById("userName").value = "";
      getData();
      setEdit("");
    } else {
      console.log("empty");
    }
  };

  const editBio = async (e) => {
    e.preventDefault();
    if (edit.length > 0) {
      await axios.put(`http://localhost:5000/user/bio/${local.email}`, {
        bio: edit,
      });
      document.getElementById("bio").value = "";
      getData();
      setEdit("");
    } else {
      console.log("empty");
    }
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
              <input
                type="text"
                onChange={(e) => setEdit(e.target.value)} id="userName"
               
              />
            </form>
            <h2>Email: {item.email}</h2>
            <form>
              <p>Bio: {item.bio}</p>
              <input type="submit" value="Edit" onClick={editBio} />
              <input type="text" onChange={(e) => setEdit(e.target.value)} id="bio" />
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Account;
