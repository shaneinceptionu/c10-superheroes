import React, { useState } from "react";
import "./App.css";

function App() {
  const [superheroList, setSuperheroList] = useState([]);
  const getSuperheroes = async () => {
    const response = await fetch("/api/superhero");
    const superheroData = await response.json();
    console.log(superheroData);
  };
  return (
    <div>
      <button onClick={getSuperheroes}>Get Superheroes</button>
    </div>
  );
}

export default App;
