import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeList from "./components/PokeList";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0n";

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
  // console.log(pokemonList,'aa')

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
        >login
        </button>
     </header>
      <ul className="all-container">
        {pokemonList.map((pokemon: any, index: number) => (
          <PokeList key={index} url={pokemon.url} />
          // pokemon.url
        ))}
      </ul>
    </div>
  );
};

export default App;