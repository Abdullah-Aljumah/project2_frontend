import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { CgLogIn } from "react-icons/cg";
import Swal from "sweetalert2";
import "./style.css";
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
  }, [email]);

  const registerPage = () => {
    navigate("/register");
  };

  const check = (e) => {
    e.preventDefault();
    let check = false;
    // eslint-disable-next-line
    users.map((item) => {
      if (item.email === email && item.password === password) {
        check = true;
      }
    });
    if (check) {
      try {
        localStorage.setItem("newUser", JSON.stringify({ email }));
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Success',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/home");
      } catch (error) {
        console.log("error ", error);
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong email or password',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    
  };

  return (
    <div className="background">
      <div className="backgroundDiv">
        <img src="https://i.gifer.com/Az1x.gif" alt="gif background"/>
      </div>
      <div className="loginContainer">
        <h1 className="iconLogin">
          <CgLogIn />
        </h1>
        <h1 className="signinH1">Sign in </h1>
        <div className="inputs">
          <form onSubmit={check}>
            <input
              className="inputVal"
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="inputVal"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="submit"
              value="Login"
              id="loginBtn"
              className="btn btn-primary"
            />
          </form>
        </div>

        <p className="PRegister" onClick={registerPage}>
          Don't have an account ?
        </p>
      </div>
    </div>
  );
};

export default Login;
