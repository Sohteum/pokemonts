import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface IpokemonData {
  name: string;
  type: string;
  id: number;
  image: string;
}

const PokeList = ({ url }: { url: string }) => {

  const [data, setData] = useState<IpokemonData>(); // 스테이트에서 타입설정하기 확인
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate()

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

  if (data == null) return <li>null Data...</li>;
  //null값이 나올수 있기 때문에 data


  const onClickHandler = () => {
    navigate("/Details")
  }


  return (
    <li className="thumb-container detail-wrapper" onClick={onClickHandler}>
      <p className="number">#Id: {data.id}</p>
      <img className="image" src={data.image} alt={data.name} />
      <p>{data.type}</p>
      <span className="name">{data.name}</span>
    </li>
  );
};


export default PokeList;

//1. n번째 포켓몬정보 뿌리기
