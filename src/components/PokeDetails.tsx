import React from "react";
import { Link } from "react-router-dom";

// { setModalOpen }: { setModalOpen: React.Dispatch<React.SetStateAction<boolean>>}



// interface IpokemonData {
//   name: string;
//   type: string;
//   id: number;
//   image: string;
// }


const PokeDetails = ({ data }:{data:any}) => {
  // const modalClose = () => {
  //   setModalOpen(false);
  // };
console.log(data,'tt')
  return (
    <div>
      <Link to="/">
        <div className="modalOpen">
         <div className="close"><i className="fa-solid fa-circle-xmark"></i></div>
            <p className="number">#Id: {data.id}</p>
            <img className="image" src={data.image} alt={data.name} />
            <p>타입{data.type}</p>
            <p className="name">이름{data.name}</p>
         
        </div>
      </Link>
    </div>
  );
};

export default PokeDetails;
