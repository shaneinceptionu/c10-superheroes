import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { SuperheroForm } from "./components/SuperheroForm";
import { SuperheroList } from "./components/SuperheroList";
import { SuperheroDetail } from "./components/SuperheroDetail";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-superhero">Add Superhero</Link>
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
