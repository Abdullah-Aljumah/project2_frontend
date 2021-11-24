import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../Nav";
const Villains = () => {
  const [villains, setVillains] = useState([]);

  useEffect(() => {
    getVillains();
    // eslint-disable-next-line
  }, []);

  const getVillains = async () => {
    try {
      const items = await axios.get("http://localhost:5000/character/villains");
      //   console.log(items.data);
      setVillains(items.data);
      console.log(villains);
    } catch (error) {
      console.log("error on get stink", error);
    }
  };

  return (
    <div>
      <Nav />

      <h1>villains</h1>
      {villains.map((item, i) => {
        return (
          <div>
            <ul>
              <li key={i}>

                <img src={item.img} alt="character face" />
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                {/* <video src={item.video} /> */}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Villains;
