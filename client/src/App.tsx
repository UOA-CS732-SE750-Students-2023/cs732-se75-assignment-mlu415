import { Link } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./components/loginpage/loginpage";
import Signuppage from "./components/signuppage/signuppage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signuppage />} />
    </Routes>
  );
}

export default App;
