import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const isValid = await login(username, password);
    if (!isValid) {
      setErrorMessage("Incorrect username or password");
    } else {
      navigate(-1);
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <TextField
          required
          autoComplete="username"
          label="Username:"
          variant="outlined"
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="Password:"
          autoComplete="current-password"
          variant="outlined"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <input type="submit" title="submit" />
        <p style={{ color: "red" }}>{errorMessage}</p>
      </form>
    </div>
  );
};

export default Login;
