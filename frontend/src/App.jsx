import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { SuperheroForm } from "./components/SuperheroForm";
import { SuperheroList } from "./components/SuperheroList";
import { SuperheroDetail } from "./components/SuperheroDetail";
import { Button, ButtonGroup } from "@mui/material";

import Authenticated from "./components/Authenticated";
import { useAuth } from "./providers/AuthProvider";
import Login from "./components/Login";
function App() {
  const { user, logout } = useAuth();
  return (
    <div>
      <nav>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
          {user && (
            <>
              <Link to="/add-superhero">
                <Button>Add Superhero</Button>
              </Link>
              <Button onClick={logout}>Logout</Button>
            </>
          )}
          {!user && <Link to="/login">Login</Link>}
        </ButtonGroup>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SuperheroList />} />
        <Route path="/detail/:id" element={<SuperheroDetail />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-superhero"
          element={
            <Authenticated>
              <SuperheroForm />
            </Authenticated>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
