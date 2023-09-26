import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import PokeList from "./components/PokeList";
import { useLocation, useNavigate } from "react-router-dom";
import PokeDetails from "./components/PokeDetails";
import { useRecoilState } from "recoil";
import { PokemonNameAtom } from "./atom/atom";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useRecoilState(PokemonNameAtom);
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
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

  const searchHandler = (e: any) => {
    e.prevent.default();
    setUserInput(e.target.value.toLowerCase());
  };

  // const searched = pokemonList.filter((item) =>
  //   item.name.toLowerCase().includes(userInput)
  // );

  const onSearch = (e: any) => {};


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
        {/* <div style={{height:"30px"}}></div> */}
        <form onSubmit={onSearch}>
          <input
            type="text"
            className="search-input"
            size={30}
            onChange={searchHandler}
          />
          <button type="submit">검색</button>
        </form>
      </header>
      <ul className="all-container">
        {pokemonList.map((pokemon: any, index: number) => (
          <PokeList key={index} url={pokemon.url} />
          // pokemon.url
        ))}
      </ul>

      {detailName === name && <PokeDetails listDb={pokemonList} />}
    </div>
  );
};

export default App;
