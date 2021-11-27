import axios from "axios";
import React from "react";
import Nav from "../Nav";
import { useState, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import "./style.css";

const Account = () => {
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [edit, setEdit] = useState("");
  const [showHide, setShowHide] = useState(false);
  const [showHide2, setShowHide2] = useState(false);
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(true);
  const URL_BASE = "https://project2-backendd.herokuapp.com";


  // Get data by email
  const getData = async () => {
    const item = await axios.get(
      `${URL_BASE}/user/email/${local.email}`
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
      await axios.put(`${URL_BASE}/user/name/${local.email}`, {
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
      await axios.put(`${URL_BASE}/user/bio/${local.email}`, {
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
    <div className="backgroundHome">
      <Nav />
      <div className="containerAccount">
        <div className="accountIcon">
          <h1 className="accountIcon">
            <MdAccountCircle />{" "}
          </h1>
          <h1 className="yourAccount">Your Account</h1>
        </div>
        {account.length &&
          account.map((item, i) => {
            return (
              <div key={i} className="firstDiv">
                <form>
                  <h1>Username: {item.userName}</h1>
                  <div>
                    {btn1 ? (
                      <input
                        type="button"
                        value="Edit Username"
                        onClick={hide}
                        className="btn btn-primary"
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
                          className="userBtn btn btn-success"
                        />
                        <input
                          type="text"
                          onChange={(e) => setEdit(e.target.value)}
                          id="userName"
                          placeholder=" New user name"
                        />
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </form>
                <h1>Email: {item.email}</h1>
                <form>
                  <p>Bio: {item.bio}</p>
                  <div>
                    {btn2 ? (
                      <div>
                        <input
                          type="button"
                          value="Edit Bio"
                          onClick={show}
                          className="btn btn-primary"
                        />
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </div>
                  {showHide2 ? (
                    <div>
                      <input
                        type="submit"
                        value="Submit"
                        onClick={editBio}
                        className="btn btn-success"
                      />
                      <input
                        type="text"
                        onChange={(e) => setEdit(e.target.value)}
                        id="bio"
                        placeholder=" New Bio"
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
      <p className="footer2" id="footerCart1">
        © 2021 Copyright: GoldenCards.com
      </p>
    </div>
  );
};

export default Account;
