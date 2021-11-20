import "./App.css";
import Nav from "./components/Nav/index";
// import Router from "router-dom";
import { Route } from "react-router";
import Home from "./components/Home";
import { Routes } from "react-router";
import Characters from "./components/Characters/index";
import Honorable from "./components/Characters/Honorable";
import Villains from "./components/Characters/Villains";
import Stink from "./components/Characters/Stink"
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/honorable" element={<Honorable />} />
        <Route path="/characters/Villains" element={<Villains />} />
        <Route path="/characters/stink" element={<Stink />} />

      </Routes>
    </div>
  );
}

export default App;
