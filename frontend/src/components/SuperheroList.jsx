import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function SuperheroList() {
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
    <section>
      <ul>
        {superheroList.map((superhero) => {
          return (
            <li key={superhero._id}>
              <Link to={`/detail/${superhero._id}`}>{superhero.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
