import React  { useState } from "react";

const PokeDetails = () => {

  // const getData = async () => {
  //   // 초기 데이터 배열 가져오기
  //   try {
  //     const result = await Axios.get(
  //       "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  //     );
  //     setData(result.data);
  //   } catch (e) {
  //     console.log("error", e);
  //   }
  // };
  const [data, setData] = useState();

  function Details(){
      
      useEffect(() => {
      const fetchData = async() => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
            const result = res.json();
            return result;
          }	
          
          fetchData().then(res => setData(res));
      }, []);

    }


  return (
    <div>
 dfdfdfdf
    </div>
  );
};

export default PokeDetails;

//1. n번째 포켓몬정보 뿌리기
