import "./App.css";
import Nav from "./components/Nav/index";
// import Router from "router-dom";
import { Route } from "react-router";
import Home from "./components/Home"
import { Routes } from "react-router";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
