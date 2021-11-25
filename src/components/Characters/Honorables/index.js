import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router";
import Nav from "../../Nav";

const Honorables = () => {
  const navigate = useNavigate();
  const [honorable, setHonorable] = useState([]);
  const [resSearch, setResSearch] = useState("");
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);

  useEffect(() => {
    getHonorable();
    // eslint-disable-next-line
  }, []);

  // Get email from local storage
  const getLocalStorage = () => {
    const item = JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("newUser"))) {
      getDataEmail();
    }
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

  // get all data
  const getHonorable = async () => {
    try {
      const items = await axios.get(
        "http://localhost:5000/character/honorbale"
      );
      setHonorable(items.data);
    } catch (error) {
      console.log("error on get honorable", error);
    }
  };

  // get character info
  const characterInfo = (name) => {
    navigate(`/character/name/${name}`);
  };

  // Get data by email
  const getDataEmail = async () => {
    const user = JSON.parse(localStorage.getItem("newUser"));
    const item = await axios.get(
      `http://localhost:5000/user/favorite/${user.email}`
    );
    setRemAdd(item.data);
  };

  // HEEEEEEEEEEEEEEEEEEEEEEEERE
  const removeOrAdd = async (id) => {
    let test = [];

    remAdd.forEach((item) => {
      test.push(item._id);
    });

    if (test.includes(id)) {
      document.getElementById(`${id}`).innerHTML = "Add";

      await axios.put(
        `http://localhost:5000/user/removeFav/${local.email}/${id}`
      );
    } else {
      document.getElementById(`${id}`).innerHTML = "Remove";

      await axios.put(
        `http://localhost:5000/user/favorite/${local.email}/${id}`
      );
    }
    test = [];
    getDataEmail();
    getLocalStorage();
  };

  const test1 = async () => {
    let test = [];

    remAdd.forEach((item) => {
      test.push(item._id);
    });
    console.log("test", test);

    if (test.length > 0) {
      test.map((item) => {
        return (document.getElementById(`${item}`).innerHTML = "Remove");
      });
    }
    test = [];
  };

  useEffect(() => {
    test1();
    // eslint-disable-next-line
  }, [remAdd]);

  return (
    <div>
      <Nav />

      <h1 className="firstWord">Honorables</h1>
      <div className="divSearchBar">
        <input
          className="searchBar"
          type="text"
          name="search"
          placeholder="Search for character"
          onChange={(e) => {
            setResSearch(e.target.value);
          }}
        />
      </div>
      <div className="contaienrCards">
        {honorable
          // eslint-disable-next-line
          .filter((item) => {
            if (resSearch === "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(resSearch.toLowerCase())
            ) {
              return item;
            }
          })
          .map((items, index) => {
            return (
              <div key={index} className="divCards">
                <ul className="ulCards">
                  <li
                    onClick={() => characterInfo(items.name)}
                    className="liCards"
                  >
                    <img
                      className="imageCharacter"
                      src={items.img}
                      alt="character face"
                    />
                    <h1 className="characterName">{items.name}</h1>
                    <h3 className="nameGame">{items.game}</h3>
                    <p className="priceCard">{items.price}</p>
                  </li>{" "}
                  <div className="divBtn">
                    <button
                      id={items._id}
                      onClick={() => removeOrAdd(items._id)}
                      className="btn"
                    >
                      <span> Add </span>
                    </button>
                  </div>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Honorables;
