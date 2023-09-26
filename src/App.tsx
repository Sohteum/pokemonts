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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSearch = async () => {
    try {
      // Pokemon 정보를 불러올 API 엔드포인트
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;

      // API 요청을 보내서 데이터 가져오기
      const response = await axios.get(apiUrl);

      // 가져온 데이터를 검색 결과로 설정
      setSearchResults([response.data]);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

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

        <input
          type="text"
          placeholder="Pokemon 이름을 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 입력값 변경 시 상태 업데이트
        />
        <button onClick={handleSearch}>검색</button>
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
