import { createContext } from "react";
import { User } from "firebase/auth";

const AuthContext = createContext({
  authData: null as User | null | undefined,
});

export default AuthContext;
