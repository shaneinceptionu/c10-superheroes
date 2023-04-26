import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const login = async (username, password) => {
    const userResponse = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (userResponse.ok) {
      const userData = await userResponse.json();
      setUser(userData);
      return true;
    } else {
      setUser(null);
      return false;
    }
  };
  const logout = async () => {
    const logoutResponse = await fetch("/api/user/logout", { method: "POST" });
    if (logoutResponse.ok) setUser(null);
  };

  useEffect(() => {
    const getUser = async () => {
      const userResponse = await fetch("/api/user");
      if (userResponse.ok) {
        const userData = await userResponse.json();
        setUser(userData);
      } else {
        setUser(null);
      }
      setLoading(false);
    };
    getUser();
  }, []);

  const contextValue = {
    logout,
    login,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
