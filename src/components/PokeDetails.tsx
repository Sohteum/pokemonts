import React from "react";
import { Link } from "react-router-dom";

// { setModalOpen }: { setModalOpen: React.Dispatch<React.SetStateAction<boolean>>}

const PokeDetails = () => {
  // const modalClose = () => {
  //   setModalOpen(false);
  // };


  return (
    <div className="modalOpen" >
      <Link to='/'>details modal</Link>
      
    </div>
  );
};

export default PokeDetails;
