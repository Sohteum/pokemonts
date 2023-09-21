import React, {   useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = React.createContext<any>('')

const LoginPage = () => {
  // const [IsLogged, setIsLogged] = useRecoilState(LoginStateAtom);

  // const onClickLoginHandler=()=>{
  //     setIsLogged()
  //   }
  //   const [form, setForm] = useRecoilState<any>(LoginStateAtom);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSigninHandler = (e: any) => {
    e.prevent.default();
    // if (id !== ""  && password !== "") 
    //   navigate("/");
    }


  return (
    <AppContext.Provider value={{id}}>
    <div className="loginPage">
      <form className="loginForm" onSubmit={onSigninHandler}>
        <img
          className="logImg"
          src={require("../../src/img/logo.png").default}
          alt="logo img"
        />
        <p className="email">Email</p>
        <p>
          <input
            className="input"
            type="email"
            value={id}
            onChange={(e: any) => {
              setId(e.target.value);
            }}
            required
          />
        </p>
        <p className="password">Password</p>
        <p>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
            required
          />
        </p>
        <button className="signin" type="submit">login</button>
      </form>
    </div>
    </AppContext.Provider>
  );
};

export default LoginPage;

//로그인 버튼을 누르면,
//1. 포켓몬 페이지로 다시 이동하기
//2. 포켓몬 페이지의 상단에 유저 이름이 나오기
//3. 포켓몬 페이지의 로그인 버튼이 로그아웃으로 바뀌기
