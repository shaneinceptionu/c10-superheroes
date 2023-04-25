import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { SuperheroForm } from "./components/SuperheroForm";
import { SuperheroList } from "./components/SuperheroList";
import { SuperheroDetail } from "./components/SuperheroDetail";
import { Button, ButtonGroup } from '@mui/material';

function App() {
  return (
    <div>
      <nav>
      <ButtonGroup variant="outlined" aria-label="outlined primary button group">
        <Link to="/">
          <Button variant="contained">
            Home
          </Button>
        </Link>
        <Link to="/add-superhero">
          <Button>
            Add Superhero
          </Button>
        </Link>
      </ButtonGroup>
      </nav>
      <Routes>
        <Route path="/" element={<SuperheroList />} />
        <Route path="/detail/:id" element={<SuperheroDetail />} />
        <Route path="/add-superhero" element={<SuperheroForm />} />
      </Routes>
    </div>
  );
}

export default App;
