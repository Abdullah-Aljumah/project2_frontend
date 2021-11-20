import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router";

const Honorables = () => {
  const navigate = useNavigate();
  const [honorable, setHonorable] = useState([]);

  useEffect(() => {
    getHonorable();
    // eslint-disable-next-line
  }, []);

  const getHonorable = async () => {
    try {
      const items = await axios.get(
        "http://localhost:5000/character/honorbale"
      );
      //   console.log(items.data);
      setHonorable(items.data);
      console.log(honorable);
    } catch (error) {
      console.log("error on get honorable", error);
    }
  };
  const characterInfo = (name) => {
    navigate(`/character/name/${name}`);
  };
  return (
    <div>
      <h1>Honorable</h1>
      {honorable.map((item, i) => {
        return (
          <div>
            <ul>
              <li key={i} onClick={() => characterInfo(item.name)}>
                <img
                  className="imageCharacter"
                  src={item.img}
                  alt="character face"
                />
                <h1>{item.name}</h1>
                {/* <img src={item.gif} /> */}
                {/* <video src={item.video} /> */}
              </li>{" "}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Honorables;