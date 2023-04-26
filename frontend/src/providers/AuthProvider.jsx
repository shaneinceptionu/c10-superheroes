import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const login = (username, password) => {
    if (username && password === "password") {
      setUser({ username });
      return true;
    } else {
      return false;
    }
  };
  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const getUser = async () => {
      setUser({ username: "useEffectTester" });
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
