import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';
export function SuperheroForm() {
  const navigate = useNavigate();
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
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={submitSuperhero}>
        <TextField required id="outlined-basic" label="Superhero Name:" variant="outlined" input onChange={(event) => setName(event.target.value)} />
        <TextField id="outlined-basic" label="Alter Ego:" variant="outlined" input onChange={(event) => setAlterEgo(event.target.value)} />
        <TextField id="outlined-basic" label="Superpower:" variant="outlined" input onChange={(event) => setSuperpower(event.target.value)} />
        <TextField id="outlined-password-input" type="password" label="Weakness:" variant="outlined" input onChange={(event) => setWeakness(event.target.value)} />
        <TextField id="outlined-basic" label="Place of Birth:" variant="outlined" input onChange={(event) => setPlaceOfBirth(event.target.value)} />
        <TextField id="outlined-number" type="number"label="Age:" variant="outlined" />
        <input type="submit" title="submit" />
        <p style={{ color: "red" }}>{errorMessage}</p>
      </form>
    </div>
  );
}
