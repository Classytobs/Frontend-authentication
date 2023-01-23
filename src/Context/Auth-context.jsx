import { createContext } from "react";

export const AuthContext = createContext({
  status: null,
  login: () => {},
  logout: () => {},
});