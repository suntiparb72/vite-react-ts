const names = ["John Doe", "Chuck Norris", "Jane Doe", "Foo bar", "Alice Bob"];

export default function Profiles() {
  const isLogin = false;

  function handleClick(id: number, name: string) {
    alert(`Hello ${id} ${name}`);
  }

  return (
    <div>
      {names.map((name, index) => {
        return (
          <p
            //   style={{backgroundColor: "red"}}
            key={index}
            onClick={() => handleClick(index, name)}
          >
            {name}
          </p>
        );
      })}

      {/* {content} */}

      {/* turnary operator */}
      {/* {isLogin? true : false} */}

      {isLogin ? <p>Hello Admin</p> : <p>please Login</p>}
    </div>
  );
}
