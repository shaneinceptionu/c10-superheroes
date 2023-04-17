import React, { useEffect, useState } from "react";
import "./App.css";
import { SuperheroDetail } from "./SuperheroDetail";
function SuperheroForm() {
  const [errorMessage, setErrorMessage] = useState();
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const [weakness, setWeakness] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [superpower, setSuperpower] = useState("");
  const superhero = {
    name,
    alterEgo,
    weakness,
    placeOfBirth,
    superpower,
  };
  const submitSuperhero = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/superhero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(superhero),
      });
      if (!response.ok) {
        console.log("bad thing happened");
        const error = await response.json();
        setErrorMessage(error.message);
      } else {
        const superheroData = await response.json();
        console.log("response data is", superheroData);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={submitSuperhero}>
        <label>Superhero Name:</label>
        <input onChange={(event) => setName(event.target.value)} />
        <label>Alter Ego:</label>
        <input onChange={(event) => setAlterEgo(event.target.value)} />
        <label>Superpower:</label>
        <input onChange={(event) => setSuperpower(event.target.value)} />
        <label>Weakness:</label>
        <input onChange={(event) => setWeakness(event.target.value)} />
        <label>Place of Birth:</label>
        <input onChange={(event) => setPlaceOfBirth(event.target.value)} />
        <label>Age:</label>

        <input type="submit" title="submit" />
        <p style={{ color: "red" }}>{errorMessage}</p>
      </form>
    </div>
  );
}
function App() {
  const [superheroList, setSuperheroList] = useState([]);

  useEffect(() => {
    async function getSuperheroes() {
      const response = await fetch("/api/superhero");
      const superheroData = await response.json();
      setSuperheroList(superheroData);
    }
    getSuperheroes();
  }, []);

  return (
    <div>
      {superheroList.map((superhero) => {
        return <SuperheroDetail superhero={superhero} />;
      })}
      <SuperheroForm />
    </div>
  );
}

export default App;
