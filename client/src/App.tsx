import { Link } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./components/loginpage/loginpage";
import Signuppage from "./components/signuppage/signuppage";
import HomePage from "./components/homepage/homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
