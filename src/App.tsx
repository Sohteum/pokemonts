import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeList from "./components/PokeList";
import { useLocation, useNavigate } from "react-router-dom";
import PokeDetails from "./components/PokeDetails";
import { useRecoilState } from "recoil";
import { IpokemonDataAtom, PokemonNameAtom, modalAtom, pokemonListAtom } from "./atom/atom";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useRecoilState(pokemonListAtom);
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(PokemonNameAtom);
  const location = useLocation();
  const detailName = location.pathname.split("/")[1];

  const [data, setData] = useRecoilState(IpokemonDataAtom);
  useEffect(() => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon";


    axios
      .get(apiUrl)
      .then((response) => {
        setPokemonList(response.data.results);
        setLoading(false);
        console.log(response.data.results, "response.data.results")
      })
      .catch((error) => {
        console.error("Error fetching Pokemon list:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  console.log(pokemonList.length, "length")

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
        {pokemonList?.map((pokemon: any, index: number) => (                  
          <PokeList key={index} url={pokemon.url} />                    
        ))}
      </ul>


     
    </div>
  );
};

export default App;
