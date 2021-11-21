import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Stinks = () => {
  const [stink, setStink] = useState([]);

  useEffect(() => {
    getStink();
    // eslint-disable-next-line
  }, []);

  const getStink = async () => {
    try {
      const items = await axios.get("http://localhost:5000/character/stink");
      //   console.log(items.data);
      setStink(items.data);
      console.log(stink);
    } catch (error) {
      console.log("error on get stink", error);
    }
  };

  return (
    <div>
      <h1>stink</h1>
      {stink.map((item, i) => {
        return (
          <div  key={i}>
            <ul>
              <li>
                <h1>{item.name}</h1>
                <p>{item.desc}</p>
                <img src={item.img} alt="character face" />
                {/* <video src={item.video} /> */}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Stinks;
