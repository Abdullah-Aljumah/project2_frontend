import axios from "axios";
import React from "react";
import Nav from "../Nav";
import { useState, useEffect } from "react";
const Account = () => {
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [edit, setEdit] = useState("");
  const [showHide, setShowHide] = useState(false);
  const [showHide2, setShowHide2] = useState(false);
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(true);
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
    setShowHide(!showHide);
    setBtn1(true);
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
    setShowHide2(!showHide2);
    setBtn2(true);
  };

  const hide = () => {
    setShowHide(!showHide);
    setBtn1(false);
  };

  const show = () => {
    setShowHide2(!showHide2);
    setBtn2(false);
  };
  return (
    <div>
      <Nav />
      {account.map((item, i) => {
        return (
          <div key={i}>
            <form>
              <h1>Username: {item.userName}</h1>
              <div>
                {btn1 ? (
                  <input
                    type="button"
                    value="Edit Username"
                    onClick={hide}
                  ></input>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="divBtnName">
                {showHide ? (
                  <div>
                    <input
                      type="submit"
                      value="Submit"
                      onClick={editName}
                      className="userBtn"
                    />
                    <input
                      type="text"
                      onChange={(e) => setEdit(e.target.value)}
                      id="userName"
                    />
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
            </form>
            <h2>Email: {item.email}</h2>
            <form>
              <p>Bio: {item.bio}</p>
              <div>
                {btn2 ? (
                  <div>
                    <input type="button" value="Edit Bio" onClick={show} />
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
              {showHide2 ? (
                <div>
                  <input type="submit" value="Submit" onClick={editBio} />
                  <input
                    type="text"
                    onChange={(e) => setEdit(e.target.value)}
                    id="bio"
                  />
                </div>
              ) : (
                <p></p>
              )}
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Account;
