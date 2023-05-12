import React from "react";
import { Provider as AuthProvider } from "./auth";
const Context = React.createContext(null);

const Provider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <AuthProvider>{children}</AuthProvider>
    </Context.Provider>
  );
};

export { Context, Provider };
