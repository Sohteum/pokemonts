import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeList from "./components/PokeList";
import { useLocation, useNavigate } from "react-router-dom";
import PokeDetails from "./components/PokeDetails";
import { useRecoilState } from "recoil";
import { PokemonNameAtom } from "./atom/atom";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(PokemonNameAtom);
  const location = useLocation();
  const detailName = location.pathname.split("/")[1];

  useEffect(() => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon";

    axios
      .get(apiUrl)
      .then((response) => {
        setPokemonList(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon list:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="pokemon-container">
      <header>
        <h1>Pokemon Evolution</h1>
        <button
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          login
        </button>
      </header>
      <ul className="all-container">
        {pokemonList.map((pokemon: any, index: number) => (
          <PokeList key={index} url={pokemon.url} />
          // pokemon.url
        ))}
      </ul>

      <div
        className="modal"
        style={{
          position: "absolute",
          // display:"none",
          top: "200px",
          left: "200px",
          // height: "600px",
          // width:"750px",
          // backgroundColor: "#ffdfe5",
          // borderRadius: "30px",
          // zIndex: "999",
        }}
        >
        {detailName === name && <PokeDetails />}
      </div>
    </div>
  );
};

export default App;
