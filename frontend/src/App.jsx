import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { SuperheroForm } from "./components/SuperheroForm";
import { SuperheroList } from "./components/SuperheroList";
import { SuperheroDetail } from "./components/SuperheroDetail";
import { Button, ButtonGroup } from "@mui/material";
import WrapperComponent from "./WrapperComponent";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Authenticated from "./components/Authenticated";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<SuperheroList />} />
        <Route path="/detail/:id" 
          element={
            <Authenticated>
              <SuperheroDetail />
            </Authenticated>
          } />
        <Route
          path="/add-superhero"
          element={
            <Authenticated>
              <SuperheroForm />
            </Authenticated>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
