import { createContext, useContext, useEffect, useState } from "react";

const User = createContext({ user: {} });

const UserProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(token);
  }, [token]);

  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

const useAuth = () => useContext(User);

export { UserProvider, useAuth };
