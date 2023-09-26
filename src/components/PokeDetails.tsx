import React from "react";
import { Link } from "react-router-dom";

// { setModalOpen }: { setModalOpen: React.Dispatch<React.SetStateAction<boolean>>}



// interface IpokemonData {
//   name: string;
//   type: string;
//   id: number;
//   image: string;
// }


const PokeDetails = ({ listDb }:{listDb:any}) => {
  // const modalClose = () => {
  //   setModalOpen(false);
  // };
console.log(listDb,'tt')
  return (
    <div>
      <Link to="/">
        <div className="modalOpen">
         <div className="close"><i className="fa-solid fa-circle-xmark"></i></div>
            <p className="number">#Id: {listDb.id}</p>
            <img className="image" src={listDb.image} alt={listDb.name} />
            <p>타입{listDb.type}</p>
            <p className="name">이름{listDb.name}</p>
         
        </div>
      </Link>
    </div>
  );
};

export default PokeDetails;
