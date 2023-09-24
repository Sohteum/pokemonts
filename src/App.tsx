import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeDetails from "./components/PokeDetails";
import { log } from "console";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

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
  console.log(pokemonList,'aa')

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon:any, index:number) => (
          <PokeDetails key={index} url={pokemon.url} />
          // pokemon.url
        ))}
      </ul>
    </div>
  );
};

export default App;