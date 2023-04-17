import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function SuperheroDetail() {
  const params = useParams();
  const id = params.id;
  const [superhero, setSuperhero] = useState();
  const [showSuperpower, setShowSuperpower] = useState(true);
  useEffect(() => {
    async function getSuperheroes() {
      const response = await fetch(`/api/superhero/${id}`);
      const superheroData = await response.json();
      console.log(superheroData);
      setSuperhero(superheroData);
    }
    getSuperheroes();
  }, []);

  return (
    <div>
      {superhero ? (
        <>
          <h3>{superhero.name}</h3>
          {showSuperpower && <p>Superpower: {superhero.superpower}</p>}
          <p>Weakness: {superhero.weakness}</p>
          <p>Place Of Birth: {superhero.placeOfBirth}</p>
          <p>Alter Ego: {superhero.alterEgo}</p>
          <button onClick={() => setShowSuperpower(!showSuperpower)}>
            Show/Hide Superpower
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
