import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

function SuperHeros() {
  let [superherosList, setSuperHerosList] = useState([
    "Ironman",
    "Thor",
    "Hulk",
  ]);
  const [name, setName] = useState("Captain America");

  const addHero = (e) => {
    e.preventDefault();
    setSuperHerosList([...superherosList, name]);
    setName("");
  };
  return (
    <div>
      <ul>
        {superherosList.map((hero) => (
          <li key={hero}>{hero}</li>
        ))}
      </ul>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addHero}>submit</button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{}}>
      <Counter />
      <Counter />
      <Counter />
      <SuperHeros />
    </div>
  );
}
