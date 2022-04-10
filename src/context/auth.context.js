import { createContext, useContext, useState } from "react";
const User = createContext({ user: {} });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const getToken = () => {
    let user = localStorage.getItem("user");
    if (user) return JSON.parse(user).encodedToken;
  };

  const setToken = (value) => {
    let data = JSON.stringify(value);
    localStorage.setItem("user", data);
  };

  const getUser = () => {
    let user = localStorage.getItem("user");
    if (user)
      return JSON.parse(user).createdUser
        ? JSON.parse(user).createdUser
        : JSON.parse(user).foundUser;
  };

  return (
    <User.Provider value={{ user, setUser, setToken, getToken, getUser }}>
      {children}
    </User.Provider>
  );
};

const useAuth = () => useContext(User);

export { UserProvider, useAuth };
