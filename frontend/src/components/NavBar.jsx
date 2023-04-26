import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "orange" }}>
      <ButtonGroup
        variant="standard"
        aria-label="outlined primary button group"
      >
        <Link to="/">
          <Button>Home</Button>
        </Link>

        <Link to="/add-superhero">
          <Button>Add Superhero</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </ButtonGroup>
    </nav>
  );
};

export default NavBar;
