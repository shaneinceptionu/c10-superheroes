import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const newUser = {
    username,
    password,
  };
  const submitSuperhero = async (event) => {
    event.preventDefault();

    const loggedIn = await login(username, password);
    if (loggedIn) {
      navigate("/");
    } else {
      setErrorMessage("Invalid username or password");
    }

    try {
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={submitSuperhero}>
        <label>Username:</label>
        <input onChange={(event) => setUsername(event.target.value)} />
        <label>Password:</label>
        <input
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
