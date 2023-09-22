import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeDetails = ({url}:{url:any}) => {
//   const [pokemonData, setPokemonData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => {
//         setPokemonData({
//           name: response.data.name,
//           type: response.data.types[0].type.name,
//           image: response.data.sprites.front_default,
//           id: response.data.id,
//         });
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching Pokemon details:", error);
//         setLoading(false);
//       });
//   }, [url]);

//   if (loading) return <li>Loading...</li>;

//   return (
//     <li>
//       {/* <h2>{pokemonData.name}</h2>
//       <p>Type: {pokemonData.type}</p>
//       <p>ID: {pokemonData.id}</p>
//       <img src={pokemonData.image} alt={pokemonData.name} /> */}
//     </li>
//   );
// };
}

export default PokeDetails;

//1. n번째 포켓몬정보 뿌리기
