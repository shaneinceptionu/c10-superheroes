import React from "react";

export function SuperheroDetail(props) {
  const superhero = props.superhero;
  return (
    <div>
      <h3>{superhero.name}</h3>
      <p>Superpower: {superhero.superpower}</p>
      <p>Weakness: {superhero.weakness}</p>
      <p>Place Of Birth: {superhero.placeOfBirth}</p>
      <p>Alter Ego: {superhero.alterEgo}</p>
    </div>
  );
}
