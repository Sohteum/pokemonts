import React, { useEffect, useState } from 'react';
import './css/App.css';
import axios from 'axios';



//헝가리안표기법 : I를 붙이는

interface Iresults {
  id : any,
  name: any,
  url: any
}


function App() {

  const [results, setResults] = useState<Iresults[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setResults([]);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon`
        );
        setResults(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e: any) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);


  console.log(results)


  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!results) return null;

  return (
    < >

    
 
          {results.map((results: any, index:any) => (
            <div key={index}>
            {results}
            </div>
          ))}
 
  
    </>
  );
}


export default App;

// {pokemonData.map((pokemon: Pokemon, index: number) => (
//   <li key={index}>
//     <PokemonItem
//       id={pokemon.id}
//       name={pokemon.name}
//       sprites={pokemon.sprites}
//       types={pokemon.types}
//     />
//   </li>
// ))}