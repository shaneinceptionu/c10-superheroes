import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const login = async (username, password) => {
    const userResponse = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const userData = await userResponse.json();
    setUser(userData);
    setLoading(false);
    if (!userData) {
      return false;
    }
    return true;
  };
  const logout = async () => {
    await fetch("/api/user/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUser(null);
    setLoading(false);
  };
  const register = () => {};

  useEffect(() => {
    const checkUser = async () => {
      const userResponse = await fetch("/api/user");
      const userData = await userResponse.json();

      if (userData) {
        setUser(userData);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    };
    checkUser();
  }, []);
  console.log("logged in user: ", user);
  const theValues = { login, logout, register, user, loading };

  return (
    <AuthContext.Provider value={theValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
