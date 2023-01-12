import { useState } from "react";

function Laptop() {
  const [state, setState] = useState({
    brand: "Apple",
    model: "Macbook Pro",
    year: "2023",
    color: "Space gray",
  });

  function handleClick() {
    setState((prevState) => ({
      ...prevState,
      color: "Silver",
    }));
  }

  return (
    <>
      <h1>My laptop is {state.brand}</h1>
      <p>
        It is a {state.color} {state.model} from {state.year}.
      </p>
      <button onClick={handleClick}>Set color in Silver</button>
    </>
  );
}
