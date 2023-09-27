import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {   useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginStateAtom } from "./atom/atom";
// import CompHeader from "./components/CompHeader";

//헝가리안표기법 : I를 붙이는


interface Iresults {
  name: string;
  url: string;
}

function App() {

const LoginState = useRecoilState(LoginStateAtom)

  const [results, setResults] = useState<Iresults[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setResults([]);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        setResults(response.data.results); // 데이터는 response.data 안에 들어있습니다.
      } catch (e: any) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!results) return null;

  return (
    <div className="pokemon-container">

      <header>
        <h1>Pokemon Evolution</h1>
        {/* <CompHeader/> */}
        <button
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          login
        </button>
      </header>
      <div
        className="all-container"
        onClick={() => {
          navigate("/PokeDetails");
        }}
      >
        {results.map((i: any, index: number) => (
          <div className="thumb-container" key={(index)}>
            {i.name}
            {/* image={i.sprites.other.dream_world.front_default}
            id={i.id}
            type={i.types[0].type.name} */}
          </div>
         
        ))}
      </div>
    </div>
  );
}

export default App;

//1. 이미지, 아이디, 타입 출력
//2. 컴포넌트 만들어서 이동