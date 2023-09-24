import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeDetails = ({url}:{url:string}) => {

  // let PokemonData: pokemonData = {
  //   name
  // };
  interface IpokemonData {
    name: string;
    type:string;
    id:number;
    image:string;
  }

  const [data, setData] = useState<IpokemonData>(); // 스테이트에서 타입설정하기 확인
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData({
          name: response.data.name,
          type: response.data.types[0].type.name,
          image: response.data.sprites.front_default,
          id: response.data.id,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon details:", error);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <li>Loading...</li>;

  if(data == null) return <li>null Data...</li>;

  return (
    <li>
      <h2>{data.name}</h2>
      <p>Type: {data.type}</p>
      <p>ID: {data.id}</p>
      <img src={data.image} alt={data.name} /> 
    </li>
  );
};


export default PokeDetails;

//1. n번째 포켓몬정보 뿌리기
