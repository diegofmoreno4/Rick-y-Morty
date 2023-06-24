import "./App.css";
import React from "react";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = React.useState([]);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const [access, setAccess] = React.useState(true);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access ? navigate("/home") : window.alert("User or Password Incorrect");
    } catch (error) {
      console.log(error);
    }
  };
  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = "http://localhost:3001/rickandmorty/login/";
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data;
  //     setAccess(data);
  //     access && navigate("/home");
  //   });
  // }

  async function onSearch(character) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${character}`
      );
      setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      window.alert(error.response.data);
    }
  }
  // const onSearch = (character) => {
  //   axios(`http://localhost:3001/rickandmorty/character/${character}`).then(
  //     ({ data }) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         alert("¡No hay personajes con este ID!");
  //       }
  //     }
  //   );
  // };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
