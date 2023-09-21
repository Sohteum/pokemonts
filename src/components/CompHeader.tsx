import React, { useContext } from "react";
import { AppContext } from "./LoginPage";
import { Link } from "react-router-dom";

const CompHeader = () => {
  const { id } = useContext(AppContext);
  return (
    <header>
      {id
        ?
      <div>
        {id}님 환영합니다.
      </div>:
      <div>
      <Link to="/login">login</Link>
    </div>
      }
    </header>
  );
};

export default CompHeader;
