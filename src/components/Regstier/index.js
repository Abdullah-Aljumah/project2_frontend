import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const Register = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const items = await axios.get("http://localhost:5000/user");
    setUsers(items.data);
  };

  const ckeck = (e) => {
    e.preventDefault();

    let check = true;
    users.map((item) => {
      if (item.email === email) {
        check = false;
      }
    });

    if (check) {
      try {
        localStorage.setItem(
          "newUser",
          JSON.stringify({ userName, email, password })
        );
        axios.post("http://localhost:5000/user/register");
        navigate("/home")
      } catch (error) {
        console.log(error);
      }
    } else {
      let myWindow = window.open("", "", "width=200,height=100");
      myWindow.document.write("<p> email existing</p>");
      myWindow.focus();
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form onSubmit={ckeck}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
