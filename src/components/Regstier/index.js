import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./style.css";
import { RiAccountCircleLine } from "react-icons/ri";
import Swal from "sweetalert2";
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
    // eslint-disable-next-line
    users.map((item) => {
      if (item.email === email || item.userName == userName) {
        check = false;
      }
    });

    if (check) {
      try {
        axios.post("http://localhost:5000/user/register", {
          userName: userName,
          email: email,
          password: password,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username or email already taken!",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const loginPage = () => {
    navigate("/");
  };

  return (
    <div className="background">
      <div className="backgroundDiv">
        <img src="https://i.gifer.com/Az1x.gif" alt="gif background" />
      </div>
      <div className="loginContainer">
        <RiAccountCircleLine className="iconRegister" />
        <h1 className="signinH1"> Create Account</h1>
        <form onSubmit={ckeck}>
          <input
            className="inputVal"
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="inputVal"
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputVal"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Register"
            id="loginBtn"
            className="btn btn-primary"
          />
        </form>
        <p onClick={loginPage} className="PRegister">
          Already have an account ?
        </p>
      </div>
    </div>
  );
};

export default Register;
