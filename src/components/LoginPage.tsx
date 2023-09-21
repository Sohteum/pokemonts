import React from 'react';
import logo from '../images/logo.png';
// import { useRecoilState } from 'recoil';
// import { LoginStateAtom } from '../atom/atom';

const LoginPage = () => {

    // const [IsLogged, setIsLogged] = useRecoilState(LoginStateAtom);
    
    // const onClickLoginHandler=()=>{
    //     setIsLogged()
    //   }
      
    return (
        <div>
            <form action="">
                <img src={logo} />
            </form>
        </div>
    );
};

export default LoginPage;

//로그인 버튼을 누르면,
//1. 포켓몬 페이지로 다시 이동하기
//2. 포켓몬 페이지의 상단에 유저 이름이 나오기
//3. 포켓몬 페이지의 로그인 버튼이 로그아웃으로 바뀌기

