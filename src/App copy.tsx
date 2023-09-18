import React, { useEffect, useState } from 'react';
import './css/App.css';
import axios from 'axios';



//헝가리안표기법 : I를 붙이는

interface Iuser {
  id: number,
  name: string,
  phone: string
}


function App() {

  const [users, setUsers] = useState<Iuser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers([]);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e: any) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  //   type map = new Map<any, string[]>([]);
  // type mapWithType = new Map<string, any[]>();

  console.log(users)


  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <ul>

      {users.map((user: any) => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}


export default App;
