import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import AuthContext from "../store/authContext";

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <AuthContext.Provider value={{ authData: user }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
