import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useAuth } from "./contexts/authContext";
import useRefresh from "./hooks/useRefresh";
import { useEffect } from "react";
import Account from "./pages/Account";

function App() {
  const refresh = useRefresh();

  const { auth } = useAuth();

  useEffect(() => {
    const user = async () => {
      try {
        const token = await refresh();
      } catch (error) {
        console.log(error);
      }
    };
    user();
  }, []);

  let unAuthenticated = auth.isAuthenticated == undefined;
  let Authenticated = auth.isAuthenticated;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/account"
          element={Authenticated ? <Account /> : <Navigate to={"/login"} />}
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={unAuthenticated ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={unAuthenticated ? <SignUp /> : <Navigate to={"/"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
