import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import Login from "./components/Login";
import Home from "./container/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { fetchUser } from "./utils/fetchUser";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate("/login");
  }, []);

  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_PUBLIC_GOOGLE_API_TOKEN}
    >
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
