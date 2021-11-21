import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const items = await axios.get("http://localhost:5000/user");
    setUsers(items.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const registerPAge = () => {
    navigate("/");
  };

  const ckeck = (e) => {
    e.preventDefault();
    let ckeck = false;
    users.map((item) => {
      if (item.email == email && item.password == password) {
        console.log("succ");
      }
    });
  };
  
  return (
    <div>
      <form onSubmit={ckeck}>
        <input
          type="text"
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
        <input type="submit" value="Login" />
      </form>

      <p onClick={registerPAge}>Don't have an account ?</p>
    </div>
  );
};

export default Login;
