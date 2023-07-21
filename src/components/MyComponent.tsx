import "./MyComponent.css";

interface Props {
  title: string,
  name?: string
}

function MyComponent({ title, name }: Props) {
  // const name = "Suntiparb";

  function handleClick() {
    alert("Click me");
  }

  return (
    <div>
      <h2 className="header" style={{ fontSize: "2rem" }}>
        {title || "Hello world!"}
      </h2>
      <p>{name}</p>
      <p>
        Lorem tester dolor sit amet consectetur adipisicing elit. Minima,
        assumenda asperiores quis iste ducimus maxime id ipsam labore eligendi
        fugiat eum, animi atque sed autem corrupti modi molestias illum.
        Laboriosam?
      </p>

      <button onClick={handleClick} className="btn btn-primary">
        Click Me!
      </button>
    </div>
  );
}

export default MyComponent;
