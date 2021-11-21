import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Honorable = () => {
  let name = useParams().name;
  const [character, setCharacter] = useState([]);

  const getCharacter = async () => {
    const item = await axios.get(
      `http://localhost:5000/character/name/${name}`
    );
    setCharacter(item.data);
    console.log(character);
  };
  useEffect(() => {
    getCharacter();
    // eslint-disable-next-line
  }, []);



  return (
    <div>
    
      {character.map((item, i) => {
        return (
          <div>
            <ul>
              <li key={i}>
                <img src={item.img} alt="character face" />
                <h1>{item.name}</h1>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Honorable;
