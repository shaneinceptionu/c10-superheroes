import React, { useState } from "react";
import "./App.css";
import { SuperheroDetail } from "./SuperheroDetail";

function App() {
  const [superheroList, setSuperheroList] = useState([]);
  async function getSuperheroes() {
    const response = await fetch("/api/superhero");
    const superheroData = await response.json();
    setSuperheroList(superheroData);
  }
  console.log(superheroList);
  const zeroJuan = {
    name: "Zero Juan",
    superpower: "Super coding skills",
    weakness: "caffeine",
    placeOfBirth: "InceptionU",
    alterEgo: "Juanito Rodriguez",
  };
  return (
    <div>
      <button onClick={getSuperheroes}>Get Superheroes</button>
      {superheroList.map((superhero) => {
        console.log("current superhero is", superhero);
        return <SuperheroDetail superhero={superhero} />;
      })}
    </div>
  );
}

export default App;
