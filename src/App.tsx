import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MyComponent from "./components/MyComponent";
// import Profiles from "./components/Profile";

interface User {
  id: number,
  name: string
}

function App() {
  const defaultUsers = [
    {
      id: 1,
      name: "Suntiparb",
    },
    {
      id: 2,
      name: "John",
    },
    {
      id: 3,
      name: "Tester",
    },
  ];

  const [count, setCount] = useState(0);

  const [users, setUsers] = useState<User[]>(defaultUsers);
  // function for setUsers => newUsers

  function addUser() {
    const id = users.length + 1;
    console.log(id);
    setUsers([...users, { id, name: "New User" }]);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + PWD</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <button onClick={addUser}>Add Users</button>
        <br />

        {users.map((user) => (
          <p key={user.id}>
            {user.id} . {user.name}
          </p>
        ))}

        <MyComponent title="This is props from App.tsx" />
        {/* <MyComponent title="this is prop component"/> */}
        {/* <Profiles /> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
