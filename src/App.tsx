import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import Auth from "./components/Auth";
import { useState, useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { auth } from "./db/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const [user, setUser] = useState(null);
  const [isFetch, setIsFetch] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
