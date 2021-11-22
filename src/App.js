import "./App.css";
// import Nav from "./components/Nav/index";
// import Router from "router-dom";
import { Route } from "react-router";
import Home from "./components/Home";
import { Routes } from "react-router";
import Characters from "./components/Characters/index";
import Honorables from "./components/Characters/Honorables";
import Villains from "./components/Characters/Villains";
import Stinks from "./components/Characters/Stinks";
import Honorable from "./components/Characters/Honorable";
import Register from "./components/Regstier";
import Login from "./components/Login";
import Account from "./components/Account";
function App() {
  return (
    <div className="App">
      
      {/* <Nav /> */}

      <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/account" element={<Account />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/character" element={<Characters />} />
        <Route exact path="/character/honorable" element={<Honorables />} />
        <Route exact path="/character/Villains" element={<Villains />} />
        <Route exact path="/character/stink" element={<Stinks />} />

        <Route path="/character/name/:name" element={<Honorable />} />
      </Routes>
    </div>
  );
}

export default App;
